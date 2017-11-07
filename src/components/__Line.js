var Config = require('../utils/Config');
var Comment = require('./__Comment');
var line = d3.line().curve(d3.curveCatmullRom).x(d => d[0]).y(d => d[1]);

class Line extends Comment {

    //添加一个区域到另外一个区域的线条组
    setData(arr) {
        var self = this;
        arr.map(function (item) {
            item.__id = '_line_' + self.GenId();
        });

        Config.GLOBAL_SVG.selectAll('.v-group-line').data([]).exit().remove();
        var linesGroup = Config.GLOBAL_SVG.selectAll('g.v-group-line').data(arr).enter()
            .append('g')
            .attr('class', 'v-group-line')
            .attr('id', d => d.__id);
        linesGroup.append('path')
            .attr('class', 'v-line')
            .attr('id', d => d.__id + '_path')
            .attr('d', function (d) {
                var from = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.from));
                var to = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.to));
                var data = [
                    from, [from[0] + (to[0] - from[0]) / 4, from[1] + (to[1] - from[1]) / 2],
                    [from[0] + (to[0] - from[0]) * 3 / 4, to[1]],
                    to
                ];
                return line(data);
            });

        linesGroup.append('circle')
            .attr('class', 'v-line-point')
            .attr('r', Config.Line.PointRadius)
            .attr('cx', 0)
            .attr('cy', 0)
            .append('animateMotion')
            .attr('begin', '0s')
            .attr('dur', _.random(Config.Line.EffectMin, Config.Line.EffectMax) / 1000 + 's')
            .attr('repeatCount', 'indefinite')
            .append('mpath')
            .attr('xlink:href', d => '#' + d.__id + '_path');


        if (_.isFunction(Config.Line.OnMouserOver)) {
            linesGroup.on('mouseover', function (d) {
                Config.Line.OnMouserOver.call(null, d);
            });
        }
        if (_.isFunction(Config.Line.OnMouserOut)) {
            linesGroup.on('mouseout', function (d) {
                Config.Line.OnMouserOut.call(null, d);
            });
        }
        if (_.isFunction(Config.Line.OnClick)) {
            linesGroup.on('click', function (d) {
                Config.Line.OnClick.call(null, d);
            });
        }
    }

    resize() {
        Config.GLOBAL_SVG.selectAll('g.v-group-line path').attr('d', function (d) {
            var from = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.from));
            var to = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.to));
            var data = [
                from, [from[0] + (to[0] - from[0]) / 4, from[1] + (to[1] - from[1]) / 2],
                [from[0] + (to[0] - from[0]) * 3 / 4, to[1]],
                to
            ];
            return line(data);
        });
    }

}

module.exports = new Line();