var Config = require('../__Config');
var Comment = require('./__Comment');
var line = d3.line().curve(d3.curveCatmullRom).x(d => d[0]).y(d => d[1]);

class Bar extends Comment {

    //设置柱状图
    setData(arr) {
        var self = this;
        Config.GLOBAL_SVG.selectAll('.v-bar').data([]).exit().remove();
        if (arr.length <= 0) {
            return;
        }

        var min = _.minBy(arr, 'count').count;
        var max = _.maxBy(arr, 'count').count;
        var heightScale = d3.scaleLinear().domain([min, max]).range([Config.Bar.HeightMin, Config.Bar.HeightMax]);
        var barsGroup = Config.GLOBAL_SVG.selectAll('rect.v-bar')
            .data(arr)
            .enter()
            .append('rect')
            .attr('class', 'v-bar')
            .attr('x', d => Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.area))[0] - Config.Bar.Width / 2)
            .attr('y', d => Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.area))[1])
            .attr('width', Config.Bar.Width)
            .attr('height', 0)
            .attr('rx', Config.Bar.Radius)
            .attr('ry', Config.Bar.Radius);

        barsGroup.transition()
            .duration(Config.Bar.Effect)
            .attr('y', d => Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.area))[1] - heightScale(d.count))
            .attr("height", d => heightScale(d.count));

        if (_.isFunction(Config.Bar.OnMouserOver)) {
            barsGroup.on('mouseover', function (d) {
                Config.Bar.OnMouserOver.call(null, d);
            });
        }
        if (_.isFunction(Config.Bar.OnMouserOut)) {
            barsGroup.on('mouseout', function (d) {
                Config.Bar.OnMouserOut.call(null, d);
            });
        }
        if (_.isFunction(Config.Bar.OnClick)) {
            barsGroup.on('click', function (d) {
                Config.Bar.OnClick.call(null, d);
            });
        }
    }

    resize() {
        Config.GLOBAL_SVG.selectAll('rect.v-bar')
            .attr('x', d => Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.area))[0] - Config.Bar.Width / 2)
            .attr('y', d => Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.area))[1]);

    }


}

module.exports = new Bar();