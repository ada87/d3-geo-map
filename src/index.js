require('./style.scss');
var defs = require('./style.html');

var Config = require('./utils/Config');
var Tip = require('./utils/Tip');
var MapBuilder = require('./utils/__MapBuilder');

//引用组件
var EffectBar = require('./components/__Bar');
var EffectLine = require('./components/__Line');
var EffectPoint = require('./components/__Point');
var EffectFly = require('./components/__Fly');

//地图变形变量,zoom时需要
var __TRANSFORM = {x:0,y:0,k:0,ix:0,iy:0};

//默认配置
Config.extend({
    //全局设置 SVG，MapBuilder, Projection，各个组件使用
    GLOBAL_SVG: null,
    GLOBAL_BUILDER: null,
    GLOBAL_PROJECTION: null,
    RotateX: 30,
    Zoom:true,
    //伪3D设置，如果不想用伪3D，则可以设置 Shadow:false 或 Shadow:null,
    Shadow: {
        Left: 5,
        Top: 5,
        Fill: '',
    },
    Bar: {
        Effect: 2000,
        HeightMin:10,
        HeightMax:60,
        Width:8,
        Radius:2,
    },
    Line: {
        EffectMin: 2000,
        EffectMax: 4000,
        PointRadius: 1.5,
    },
    Point: {
        EffectMin: 2000,
        EffectMax: 4000,
        RadiusMin: 8,
        RadiusMax: 16,
    },
    Fly: {
        EffectMin: 2000,
        EffectMax: 4000,
    },
    OnSelect: null,

});

//根元素，容器元素，根元素宽高，高度比例，容器元素高度
var ROOT, Container, WIDTH, HEIGHT, PHEIGHT, THEIGHT;


class VisualMap {

    constructor(json, element, config) {
        //自定义配置
        Config.extend(config);
        [ROOT, WIDTH, HEIGHT] = [element, element.clientWidth, element.clientHeight];
        PHEIGHT = Math.cos(Math.PI * 2 * Config.RotateX / 360);
        THEIGHT = HEIGHT / PHEIGHT;
        Config.GLOBAL_BUILDER = new MapBuilder(json, element);
        Container = d3.select(element)
            .append('div')
            .attr('class', 'v-map')
            .attr('style', 'width:' + WIDTH + 'px;height:' + THEIGHT + 'px;margin-top:' + (HEIGHT - THEIGHT) / 2 + 'px;transform: rotateX(' + Config.RotateX + 'deg);');
        Config.GLOBAL_SVG = Container.append('svg')
            .attr('width', WIDTH)
            .attr('height', THEIGHT);
        Config.GLOBAL_SVG.append('defs').html(defs);
        this._init(json);
    }


    _init(json) {
        var self = this;
        var center = Config.GLOBAL_BUILDER.getCenter();
        var scale = Config.GLOBAL_BUILDER.getFullScale();


        if (Config.Shadow) {
            var projectionBkg = d3.geoMercator()
                .center(center)
                .scale(scale)
                .translate([WIDTH / 2 + Config.Shadow.Left, THEIGHT / 2 + Config.Shadow.Top]);
            var pathBkg = d3.geoPath().projection(projectionBkg);
            Config.GLOBAL_SVG.append('g')
                .attr('class', 'v-group-background')
                .selectAll('path.v-item-background')
                .data(json.features)
                .enter()
                .append('path')
                .attr('class', 'v-item-background')
                .attr('d', pathBkg);
        }


        var groupArea = Config.GLOBAL_SVG.append('g').attr('class', 'v-group');
        Config.GLOBAL_PROJECTION = d3.geoMercator()
            .center(center)
            .scale(scale)
            .translate([WIDTH / 2, THEIGHT / 2]);
        var path = d3.geoPath().projection(Config.GLOBAL_PROJECTION);


        var shapes = groupArea.selectAll('g.v-item')
            .data(json.features)
            .enter()
            .append('g')
            .attr('id', d => '_area_' + d.properties.adcode || d.properties.id || d.properties.name)
            .attr('class', 'v-item');

        shapes.append('path')
            .attr('class', 'v-area')
            .attr('d', path);
        shapes.append('text')
            .attr('class', 'v-label')
            .attr('x', d => Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.properties.name))[0])
            .attr('y', d => Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.properties.name))[1] + 5)
            .text(d => d.properties.name);

        shapes.on('mouseover', function (d) {
                var html = `
                <h2 class="custom">${d.properties.name}</h2>
            `;
                Tip.show(html);
            })
            .on('mouseout', () => Tip.hide())
            .on('click', function (d) {
                shapes.classed('v-item-selected', false);
                d3.select(this).classed('v-item-selected', true);

            });
        if (_.isFunction(Config.OnSelect)) {
            shapes.on('click', function (d) {
                var areaName = d.properties.name;
                var id = Config.GLOBAL_BUILDER.getId(areaName);
                Config.GLOBAL_SVG.selectAll('g.v-item').classed('v-item-selected', false);
                Config.GLOBAL_SVG.selectAll('g#_area_' + id).classed('v-item-selected', true);
                Config.OnSelect.call(null, areaName);
            });
        }

        window.addEventListener('resize', function () {
            self._resize();
        });

        if(Config.Zoom){
            Config.GLOBAL_SVG.call(d3.zoom().on("zoom", self._zoom));
        }
    }

    _resize() {
        [WIDTH, HEIGHT] = [ROOT.clientWidth, ROOT.clientHeight];
        THEIGHT = HEIGHT / PHEIGHT;

        Container.attr('style', 'width:' + WIDTH + 'px;height:' + THEIGHT + 'px;margin-top:' + (HEIGHT - THEIGHT) / 2 + 'px;transform: rotateX(' + Config.RotateX + 'deg);');
        Config.GLOBAL_SVG.attr('width', WIDTH).attr('height', THEIGHT);
        var center = Config.GLOBAL_BUILDER.getCenter();
        var scale = Config.GLOBAL_BUILDER.getFullScale();
        Config.GLOBAL_PROJECTION = d3.geoMercator()
            .center(center)
            .scale(scale)
            .translate([WIDTH / 2, THEIGHT / 2]);
        var path = d3.geoPath().projection(Config.GLOBAL_PROJECTION);
        Config.GLOBAL_SVG.selectAll("path.v-area")
            .attr("d", path);
        Config.GLOBAL_SVG.selectAll('text.v-label')
            .attr('x', d => Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.properties.name))[0])
            .attr('y', d => Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.properties.name))[1] + 5);

        if (Config.Shadow) {
            var projectionBkg = d3.geoMercator()
                .center(center)
                .scale(scale)
                .translate([WIDTH / 2 + Config.Shadow.Left, THEIGHT / 2 + Config.Shadow.Top]);
            var pathBkg = d3.geoPath().projection(projectionBkg);
            Config.GLOBAL_SVG.selectAll('path.v-item-background').attr('d', pathBkg);
        }
    

        EffectBar.resize();
        EffectLine.resize();
        EffectPoint.resize();
        EffectFly.resize();
    }

    _zoom(){
        let transform = d3.event.transform;
        if(transform.k == __TRANSFORM.k){
            __TRANSFORM.x += transform.x - __TRANSFORM.ix;
            __TRANSFORM.y += transform.y - __TRANSFORM.iy;
        }else{
            __TRANSFORM.k = transform.k;
            __TRANSFORM.ix = transform.x;
            __TRANSFORM.iy = transform.y;
        }
        Config.GLOBAL_SVG.attr("transform", "translate(" + __TRANSFORM.x + "," + __TRANSFORM.y + ") scale(" + __TRANSFORM.k + ")");
    }


    setBars(arr) {
        EffectBar.setData(arr);
    }

    setLines(arr) {
        EffectLine.setData(arr);
    }

    setPoints(arr) {
        EffectPoint.setData(arr);
    }


    setColors(arr) {
        Config.GLOBAL_SVG.selectAll('path.v-area').attr('style', ';');
        arr.map(function (item) {
            var id = Config.GLOBAL_BUILDER.getId(item.area);
            Config.GLOBAL_SVG.select('#_area_' + id + ' .v-area').attr('style', 'fill:' + item.fill);
        });
    }


    //飞到点内
    fly(from, to, callback) {
        EffectFly.fly(from, to, callback);
    }

    showTip(html, target) {
        if (_.isString(target)) {
            var point = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(target));
            var offset = ROOT.getBoundingClientRect();
            Tip.showBy(offset.x + point[0], offset.y + point[1] * PHEIGHT, html);
        } else {
            Tip.show(html);
        }
    }
    hideTip() {
        Tip.hide();
    }

}

module.exports = VisualMap;