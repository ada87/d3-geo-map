var Config = require('../__Config');
var Comment = require('./__Comment');
var line = d3.line().curve(d3.curveCatmullRom).x(d => d[0]).y(d => d[1]);

class Fly extends Comment{


    //从任意一个点飞到一个地区的中心点
    fly(from, to, callback) {
        if(_.isString(from)){
            from = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(from));
        }
        if(_.isString(to)){
            to = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(to));
        }
        var data = [
            from,
            to
        ];
        Config.GLOBAL_SVG.append('path')
            .datum(data)
            .attr('class', 'v-fly-line')
            .transition()
            .duration(_.random(Config.Fly.EffectMin, Config.Fly.EffectMax))
            .attrTween('d', function (d) {
                var h = d[1][0] - d[0][0];
                var v = d[1][1] - d[0][1];
                var [x, y] = d[0];
                return function (t) {
                    var [cx, cy] = [x, y];
                    if (t > 0.2 && t <= 0.8) {
                        [cx, cy] = [x + d3.easeSinOut(t - 0.2) * h, y + d3.easeSinIn(t - 0.2) * v];
                    } else if (t > 0.8) {
                        [cx, cy] = [x + d3.easeSinOut(2 * t - 1) * h, y + d3.easeSinIn(2 * t - 1) * v];
                    }
                    var [tx, ty] = [x + d3.easeSinOut(t) * h, y + d3.easeSinIn(t) * v];
                    return line([
                        [cx, cy],
                        [cx + (tx - cx) / 3, cy + (ty - cy) / 4],
                        [tx, ty]
                    ]);
                }
            })
            .on('end', function () {
                if (callback) {
                    callback.call(null);
                }
            })
            .remove();
    }

}

module.exports = new Fly();