/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//配置项模型，固定一个extend方法，不能覆盖
var Config = {
    extend: function extend(data) {
        _.merge(Config, data);
    }
};

module.exports = Config;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __IDGEN = 100;

var Comment = function () {
    function Comment() {
        _classCallCheck(this, Comment);
    }

    _createClass(Comment, [{
        key: "resize",
        value: function resize() {}
    }, {
        key: "GenId",
        value: function GenId() {
            return ++__IDGEN;
        }
    }]);

    return Comment;
}();

module.exports = Comment;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VMap = __webpack_require__(3);
var map = null;
var AreaList = [];
var AllowAreaList = ['china', 'hubei', 'wuhan'];
var CurrentArea = 'china';
var ptns = window.location.href.split('?area=');
if (ptns.length == 2) {
    if (_.indexOf(AllowAreaList, ptns[1]) >= 0) {
        CurrentArea = ptns[1];
    }
}

var TestFunctions = function () {
    function TestFunctions() {
        _classCallCheck(this, TestFunctions);

        this.AREA = CurrentArea;
    }

    _createClass(TestFunctions, [{
        key: 'switchMap',
        value: function switchMap(AREA) {
            window.location.href = '?area=' + AREA;
        }
    }, {
        key: 'setBars',
        value: function setBars() {
            var areas = _.sampleSize(AreaList, _.random(1, AreaList.length - 1));
            var arr = [];
            areas.map(function (area) {
                arr.push({
                    area: area,
                    count: _.random(0, 10000)
                });
            });
            map.setBars(arr);
        }
    }, {
        key: 'clearBars',
        value: function clearBars() {
            map.setBars([]);
        }
    }, {
        key: 'setLines',
        value: function setLines() {
            var arr = [];
            for (var i = 0, _i = _.random(5, 20); i < _i; i++) {
                var areas = _.sampleSize(AreaList, 2);
                arr.push({
                    from: areas[0],
                    to: areas[1],
                    data: _.random(10000)
                });
            }
            map.setLines(arr);
        }
    }, {
        key: 'clearLines',
        value: function clearLines() {
            map.setLines([]);
        }
    }, {
        key: 'setColors',
        value: function setColors() {
            var areas = _.sampleSize(AreaList, _.random(1, AreaList.length - 1));
            var arr = [];
            areas.map(function (area) {
                arr.push({
                    area: area,
                    fill: _.sample(d3.schemeCategory20)
                });
            });
            map.setColors(arr);
        }
    }, {
        key: 'clearColors',
        value: function clearColors() {
            map.setColors([]);
        }
    }, {
        key: 'setPoints',
        value: function setPoints() {
            map.setPoints(_.sampleSize(AreaList, _.random(1, AreaList.length - 1)));
        }
    }, {
        key: 'flyArea',
        value: function flyArea() {
            var areas = _.sampleSize(AreaList, 2);
            map.fly(areas[0], areas[1]);
        }
    }, {
        key: 'flyRandom',
        value: function flyRandom() {
            var element = document.getElementById('container');
            var _ref = [element.clientWidth, element.clientHeight],
                w = _ref[0],
                h = _ref[1];

            map.fly([_.random(0, w), _.random(0, h)], [_.random(0, w), _.random(0, h)]);
        }
    }]);

    return TestFunctions;
}();

var test = new TestFunctions();

d3.json('/data/' + CurrentArea + '.json', function (json) {
    map = new VMap(json, document.getElementById('container'), {
        Bar: {
            OnMouserOver: function OnMouserOver(item) {
                map.showTip(item.area + ' : ' + item.count);
            },
            OnMouserOut: function OnMouserOut(item) {
                map.hideTip();
            },
            OnClick: function OnClick(item) {
                console.log(item, 'clicked');
            }
        },
        Lines: {
            OnMouserOver: function OnMouserOver(item) {
                map.showTip(item.from + ' -> ' + item.to + ' : ' + item.data);
            },
            OnMouserOut: function OnMouserOut(item) {
                map.hideTip();
            },
            OnClick: function OnClick(item) {
                console.log(item, 'clicked');
            }
        },
        Fly: {
            EffectMin: 1000,
            EffectMax: 2000
        },
        OnSelect: function OnSelect(areaname) {
            map.setPoints([areaname]);
        }
    });

    json.features.map(function (item) {
        AreaList.push(item.properties.name);
    });
    var gui = new dat.GUI();

    //切换地图
    gui.add(test, 'AREA', {
        '中国': 'china',
        '湖北': 'hubei',
        '武汉': 'wuhan'
    }).onChange(test.switchMap);

    //设置条形图
    gui.add(test, 'setBars');
    //清空条形图
    gui.add(test, 'clearBars');
    //设置连线
    gui.add(test, 'setLines');
    //清空连线
    gui.add(test, 'clearLines');

    //随机出现一条链接飞线
    gui.add(test, 'flyArea');
    //随机出现一条链接飞线
    gui.add(test, 'flyRandom');
    //随机生成地图颜色
    gui.add(test, 'setColors');
    //随机生成地图颜色
    gui.add(test, 'clearColors');
    //随机生成扩散点
    gui.add(test, 'setPoints');

    //测试：点击后由点击时的位置随机向一个目标发射一条飞线
    document.getElementById('container').addEventListener('click', function (evt) {
        var target = _.sample(AreaList);
        map.fly([evt.offsetX, evt.offsetY], target, function () {
            map.showTip(target, target);
        });
    }, false);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(4);
var defs = __webpack_require__(9);

var Config = __webpack_require__(0);
var Tip = __webpack_require__(10);
var MapBuilder = __webpack_require__(11);

//引用组件
var EffectBar = __webpack_require__(12);
var EffectLine = __webpack_require__(13);
var EffectPoint = __webpack_require__(14);
var EffectFly = __webpack_require__(15);

//地图变形变量,zoom时需要
var __TRANSFORM = { x: 0, y: 0, k: 0, ix: 0, iy: 0 };

//默认配置
Config.extend({
    //全局设置 SVG，MapBuilder, Projection，各个组件使用
    GLOBAL_SVG: null,
    GLOBAL_BUILDER: null,
    GLOBAL_PROJECTION: null,
    RotateX: 30,
    Zoom: true,
    //伪3D设置，如果不想用伪3D，则可以设置 Shadow:false 或 Shadow:null,
    Shadow: {
        Left: 5,
        Top: 5,
        Fill: ''
    },
    Bar: {
        Effect: 2000,
        HeightMin: 10,
        HeightMax: 60,
        Width: 8,
        Radius: 2
    },
    Line: {
        EffectMin: 2000,
        EffectMax: 4000,
        PointRadius: 1.5
    },
    Point: {
        EffectMin: 2000,
        EffectMax: 4000,
        RadiusMin: 8,
        RadiusMax: 16
    },
    Fly: {
        EffectMin: 2000,
        EffectMax: 4000
    },
    OnSelect: null

});

//根元素，容器元素，根元素宽高，高度比例，容器元素高度
var ROOT, Container, WIDTH, HEIGHT, PHEIGHT, THEIGHT;

var D3GeoMap = function () {
    function D3GeoMap(json, element, config) {
        _classCallCheck(this, D3GeoMap);

        //自定义配置
        Config.extend(config);
        var _ref = [element, element.clientWidth, element.clientHeight];
        ROOT = _ref[0];
        WIDTH = _ref[1];
        HEIGHT = _ref[2];

        PHEIGHT = Math.cos(Math.PI * 2 * Config.RotateX / 360);
        THEIGHT = HEIGHT / PHEIGHT;
        Config.GLOBAL_BUILDER = new MapBuilder(json, element);
        Container = d3.select(element).append('div').attr('class', 'v-map').attr('style', 'width:' + WIDTH + 'px;height:' + THEIGHT + 'px;margin-top:' + (HEIGHT - THEIGHT) / 2 + 'px;transform: rotateX(' + Config.RotateX + 'deg);');
        Config.GLOBAL_SVG = Container.append('svg').attr('width', WIDTH).attr('height', THEIGHT);
        Config.GLOBAL_SVG.append('defs').html(defs);
        this._init(json);
    }

    _createClass(D3GeoMap, [{
        key: '_init',
        value: function _init(json) {
            var self = this;
            var center = Config.GLOBAL_BUILDER.getCenter();
            var scale = Config.GLOBAL_BUILDER.getFullScale();

            if (Config.Shadow) {
                var projectionBkg = d3.geoMercator().center(center).scale(scale).translate([WIDTH / 2 + Config.Shadow.Left, THEIGHT / 2 + Config.Shadow.Top]);
                var pathBkg = d3.geoPath().projection(projectionBkg);
                Config.GLOBAL_SVG.append('g').attr('class', 'v-group-background').selectAll('path.v-item-background').data(json.features).enter().append('path').attr('class', 'v-item-background').attr('d', pathBkg);
            }

            var groupArea = Config.GLOBAL_SVG.append('g').attr('class', 'v-group');
            Config.GLOBAL_PROJECTION = d3.geoMercator().center(center).scale(scale).translate([WIDTH / 2, THEIGHT / 2]);
            var path = d3.geoPath().projection(Config.GLOBAL_PROJECTION);

            var shapes = groupArea.selectAll('g.v-item').data(json.features).enter().append('g').attr('id', function (d) {
                return '_area_' + d.properties.adcode || d.properties.id || d.properties.name;
            }).attr('class', 'v-item');

            shapes.append('path').attr('class', 'v-area').attr('d', path);
            shapes.append('text').attr('class', 'v-label').attr('x', function (d) {
                return Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.properties.name))[0];
            }).attr('y', function (d) {
                return Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.properties.name))[1] + 5;
            }).text(function (d) {
                return d.properties.name;
            });

            shapes.on('mouseover', function (d) {
                var html = '\n                <h2 class="custom">' + d.properties.name + '</h2>\n            ';
                Tip.show(html);
            }).on('mouseout', function () {
                return Tip.hide();
            }).on('click', function (d) {
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

            if (Config.Zoom) {
                Config.GLOBAL_SVG.call(d3.zoom().on("zoom", self._zoom));
            }
        }
    }, {
        key: '_resize',
        value: function _resize() {
            var _ref2 = [ROOT.clientWidth, ROOT.clientHeight];
            WIDTH = _ref2[0];
            HEIGHT = _ref2[1];

            THEIGHT = HEIGHT / PHEIGHT;

            Container.attr('style', 'width:' + WIDTH + 'px;height:' + THEIGHT + 'px;margin-top:' + (HEIGHT - THEIGHT) / 2 + 'px;transform: rotateX(' + Config.RotateX + 'deg);');
            Config.GLOBAL_SVG.attr('width', WIDTH).attr('height', THEIGHT);
            var center = Config.GLOBAL_BUILDER.getCenter();
            var scale = Config.GLOBAL_BUILDER.getFullScale();
            Config.GLOBAL_PROJECTION = d3.geoMercator().center(center).scale(scale).translate([WIDTH / 2, THEIGHT / 2]);
            var path = d3.geoPath().projection(Config.GLOBAL_PROJECTION);
            Config.GLOBAL_SVG.selectAll("path.v-area").attr("d", path);
            Config.GLOBAL_SVG.selectAll('text.v-label').attr('x', function (d) {
                return Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.properties.name))[0];
            }).attr('y', function (d) {
                return Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.properties.name))[1] + 5;
            });

            if (Config.Shadow) {
                var projectionBkg = d3.geoMercator().center(center).scale(scale).translate([WIDTH / 2 + Config.Shadow.Left, THEIGHT / 2 + Config.Shadow.Top]);
                var pathBkg = d3.geoPath().projection(projectionBkg);
                Config.GLOBAL_SVG.selectAll('path.v-item-background').attr('d', pathBkg);
            }

            EffectBar.resize();
            EffectLine.resize();
            EffectPoint.resize();
            EffectFly.resize();
        }
    }, {
        key: '_zoom',
        value: function _zoom() {
            var transform = d3.event.transform;
            if (transform.k == __TRANSFORM.k) {
                __TRANSFORM.x += transform.x - __TRANSFORM.ix;
                __TRANSFORM.y += transform.y - __TRANSFORM.iy;
            } else {
                __TRANSFORM.k = transform.k;
                __TRANSFORM.ix = transform.x;
                __TRANSFORM.iy = transform.y;
            }
            Config.GLOBAL_SVG.attr("transform", "translate(" + __TRANSFORM.x + "," + __TRANSFORM.y + ") scale(" + __TRANSFORM.k + ")");
        }
    }, {
        key: 'setBars',
        value: function setBars(arr) {
            EffectBar.setData(arr);
        }
    }, {
        key: 'setLines',
        value: function setLines(arr) {
            EffectLine.setData(arr);
        }
    }, {
        key: 'setPoints',
        value: function setPoints(arr) {
            EffectPoint.setData(arr);
        }
    }, {
        key: 'setColors',
        value: function setColors(arr) {
            Config.GLOBAL_SVG.selectAll('path.v-area').attr('style', ';');
            arr.map(function (item) {
                var id = Config.GLOBAL_BUILDER.getId(item.area);
                Config.GLOBAL_SVG.select('#_area_' + id + ' .v-area').attr('style', 'fill:' + item.fill);
            });
        }

        //飞到点内

    }, {
        key: 'fly',
        value: function fly(from, to, callback) {
            EffectFly.fly(from, to, callback);
        }
    }, {
        key: 'showTip',
        value: function showTip(html, target) {
            if (_.isString(target)) {
                var point = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(target));
                var offset = ROOT.getBoundingClientRect();
                Tip.showBy(offset.x + point[0], offset.y + point[1] * PHEIGHT, html);
            } else {
                Tip.show(html);
            }
        }
    }, {
        key: 'hideTip',
        value: function hideTip() {
            Tip.hide();
        }
    }]);

    return D3GeoMap;
}();

module.exports = D3GeoMap;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/_css-loader@0.28.7@css-loader/index.js!../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/_css-loader@0.28.7@css-loader/index.js!../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".v-map g.v-group-background {\n  pointer-events: none; }\n  .v-map g.v-group-background path {\n    fill: rgba(57, 109, 130, 0.25); }\n\n.v-map g.v-item .v-area {\n  stroke-width: 0.1;\n  stroke: #cccccc;\n  fill: rgba(0, 0, 0, 0.4); }\n\n.v-map g.v-item .v-label {\n  fill: rgba(255, 255, 255, 0.3);\n  text-anchor: middle;\n  font-size: 10px; }\n\n.v-map g.v-item:hover .v-area {\n  fill: rgba(255, 0, 0, 0.6); }\n\n.v-map g.v-item:hover .v-label {\n  fill: rgba(255, 255, 255, 0.8); }\n\n.v-map g.v-item-selected .v-area {\n  stroke-width: 0.5;\n  filter: url(#f-shadow); }\n\n.v-map .v-bar {\n  cursor: pointer;\n  fill: url(#f-bar);\n  fill-opacity: 0.5; }\n  .v-map .v-bar:hover {\n    fill: url(#f-bar-hover);\n    fill-opacity: 0.8; }\n\n.v-map .v-line {\n  cursor: pointer;\n  stroke-width: 0.4;\n  stroke: url(#f-line);\n  fill: transparent; }\n\n.v-map .v-line-point {\n  stroke: url(#f-line-point); }\n\n.v-map .v-fly-line {\n  stroke: url(#f-fly);\n  fill: transparent; }\n\n.v-map .v-point {\n  fill: url(#f-point);\n  pointer-events: none; }\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<!-- 条形图样式 -->\r\n<linearGradient id=\"f-bar\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\">\r\n    <stop offset=\"0%\" stop-color=\"#02CBFE\"></stop>\r\n    <stop offset=\"100%\" stop-color=\"#0D365D\"></stop>\r\n</linearGradient>\r\n<linearGradient id=\"f-bar-hover\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\">\r\n    <stop offset=\"0%\" stop-color=\"#C94BC3\"></stop>\r\n    <stop offset=\"100%\" stop-color=\"#0D365D\"></stop>\r\n</linearGradient>\r\n\r\n<!-- 连线样式 -->\r\n<linearGradient id=\"f-line\" gradientUnits=\"objectBoundingBox\">\r\n    <stop offset=\"0\" stop-color=\"transparent\" />\r\n    <stop offset=\".33\" stop-color=\"#A17095\" />\r\n    <stop offset=\".67\" stop-color=\"#D04DC1\" />\r\n    <stop offset=\"1\" stop-color=\"#D1EACC\" />\r\n</linearGradient>\r\n\r\n<!-- 连线点样式 -->\r\n<radialGradient id=\"f-line-point\">\r\n    <stop offset=\"0%\" style=\"stop-color: transparent;\" />\r\n    <stop offset=\"40%\" style=\"stop-color: #FF7770;\" />\r\n    <stop offset=\"100%\" style=\"stop-color: #D1F9D6;\" />\r\n</radialGradient>\r\n\r\n<!-- 飞线样式 -->\r\n<linearGradient id=\"f-fly\" gradientUnits=\"objectBoundingBox\">\r\n    <stop offset=\"0\" stop-color=\"#0e374f\" />\r\n    <stop offset=\".33\" stop-color=\"#069a2b\" />\r\n    <stop offset=\".67\" stop-color=\"#d6f252\" />\r\n    <stop offset=\"1\" stop-color=\"#ffffff\" />\r\n</linearGradient>\r\n\r\n<!-- 扩散点样式 -->\r\n<radialGradient id=\"f-point\">\r\n    <stop offset=\"0%\" style=\"stop-color: transparent;\" />\r\n    <stop offset=\"40%\" style=\"stop-color: transparent;\" />\r\n    <stop offset=\"100%\" style=\"stop-color: #00F6FF;\" />\r\n</radialGradient>\r\n\r\n\r\n<!-- 地图伪3D阴影效果 -->\r\n<filter id=\"f-shadow\">\r\n    <feColorMatrix type=\"matrix\" values=\"\r\n    0 0 0 0 0\r\n    0 0 0 .8 0\r\n    0 0 0 .8 0\r\n    0 0 0 0.5 0\r\n  \"></feColorMatrix>\r\n    <feGaussianBlur stdDeviation=\"1\" result=\"colorBlur1\"></feGaussianBlur>\r\n\r\n    <feOffset result=\"offsetBlur0\" in=\"colorBlur1\" dx=\"1\" dy=\"1\" />\r\n    <feOffset result=\"offsetBlur1\" in=\"colorBlur1\" dx=\"3\" dy=\"3\" />\r\n    <feOffset result=\"offsetBlur2\" in=\"colorBlur1\" dx=\"5\" dy=\"5\" />\r\n\r\n    <feSpecularLighting in=\"SourceGraphic\" lighting-color=\"#ffb8b8\" surfaceScale=\"1\" specularConstant=\"1\" specularExponent=\"115\"\r\n        result=\"light\">\r\n        <feDistantLight elevation=\"1\" azimuth=\"1\"></feDistantLight>\r\n    </feSpecularLighting>\r\n    <feComposite in=\"light\" in2=\"SourceGraphic\" operator=\"in\" result=\"light-effect\"></feComposite>\r\n\r\n    <feBlend in=\"light\" in2=\"SourceGraphic\" mode=\"screen\"></feBlend>\r\n    <feMerge>\r\n        <feMergeNode in=\"offsetBlur0\" />\r\n        <feMergeNode in=\"offsetBlur1\" />\r\n        <feMergeNode in=\"offsetBlur2\" />\r\n        <feMergeNode in=\"SourceGraphic\" />\r\n        <feMergeNode in=\"light-effect\" />\r\n    </feMerge>\r\n</filter>";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * D3 图提示说明：
*/
var tooltip = null,
    PID = null;
var WIDTH = window.innerWidth - 200;
var HEIGHT = window.innerHeight - 80;
var THEME = {
    BACKGROUND: 'rgba(40, 60, 125,0.75)',
    BORDER: "#2A3454",
    TEXT: '#C3D1DE'
};

window.addEventListener('resize', function () {
    WIDTH = window.innerWidth - 200;
    HEIGHT = window.innerHeight - 80;
});

if (d3.select('#__v_tip').size() == 1) {
    tooltip = d3.select('#__v_tip');
} else {
    tooltip = d3.select('body').append('div').attr('id', '#__v_tip');
}

tooltip.style('position', 'fixed').style("opacity", 0).style('padding', '5px').style('left', '0').style('top', '0').style('height', 'auto').style('width', 'auto').style('opacity', 0).style('pointer-events', 'none').style('display', 'block').style('border', '1px solid ' + THEME.BORDER).style('background', THEME.BACKGROUND).style('color', THEME.TEXT);

var showTooltip = function showTooltip(html) {
    window.clearTimeout(PID);
    tooltip.html(html);
    tooltip.style('opacity', 1);
    var left = d3.event.clientX - 48 + 'px',
        right = 'auto',
        top = d3.event.clientY + 16 + 'px',
        bottom = 'auto';
    if (d3.event.clientX > WIDTH) {
        left = 'auto';
        right = WIDTH + 200 - d3.event.clientX + 20 + 'px';
    }
    if (d3.event.clientY > HEIGHT) {
        top = 'auto';
        bottom = HEIGHT + 80 - d3.event.clientY + 20 + 'px';
    }

    tooltip.style('left', left).style('top', top).style('right', right).style('bottom', bottom);
};

var showToolTipByCoord = function showToolTipByCoord(x, y, html) {
    window.clearTimeout(PID);
    tooltip.html(html);
    tooltip.style('opacity', 1);
    var left = x - 48 + 'px',
        right = 'auto',
        top = y + 16 + 'px',
        bottom = 'auto';
    if (x > WIDTH) {
        left = 'auto';
        right = WIDTH + 200 - x + 20 + 'px';
    }
    if (y > HEIGHT) {
        top = 'auto';
        bottom = HEIGHT + 80 - y + 20 + 'px';
    }
    tooltip.style('left', left).style('top', top).style('right', right).style('bottom', bottom);
};

var hideTooltip = function hideTooltip(delay) {
    delay = delay || 1000;
    window.clearTimeout(PID);
    PID = window.setTimeout(function () {
        tooltip.transition().duration(1000).style('opacity', 0);
    }, delay);
};

module.exports = {
    show: showTooltip,
    hide: hideTooltip,
    showBy: showToolTipByCoord
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ZOOM = 48 * 0.9; //容器内缩放至 90%

var CoordMap = {},
    WIDTH = 0,
    HEIGHT = 0;

/**
 *  地图经纬度构造器
 */

var MapBuilder = function () {

	/**
  * 支持标准GeoJson 和 经过转换后的 topojson
 */
	function MapBuilder(json, element) {
		_classCallCheck(this, MapBuilder);

		var _d3$geoBounds = d3.geoBounds(json);

		var _d3$geoBounds2 = _slicedToArray(_d3$geoBounds, 2);

		var _d3$geoBounds2$ = _slicedToArray(_d3$geoBounds2[0], 2);

		this.left = _d3$geoBounds2$[0];
		this.top = _d3$geoBounds2$[1];

		var _d3$geoBounds2$2 = _slicedToArray(_d3$geoBounds2[1], 2);

		this.right = _d3$geoBounds2$2[0];
		this.bottom = _d3$geoBounds2$2[1];
		var _ref = [element.clientWidth, element.clientHeight];
		WIDTH = _ref[0];
		HEIGHT = _ref[1];

		window.addEventListener('resize', function () {
			var _ref2 = [element.clientWidth, element.clientHeight];
			WIDTH = _ref2[0];
			HEIGHT = _ref2[1];
		});
		json.features.map(function (item) {
			CoordMap[item.properties.name] = {};
			CoordMap[item.properties.name]['id'] = item.properties.adcode || item.properties.id || item.properties.name;
			// if (item.properties.center) {
			// CoordMap[item.properties.name]['center'] = [item.properties.center.lng, item.properties.center.lat];
			// } else {
			CoordMap[item.properties.name]['center'] = d3.geoCentroid(item);
			// }
		});
	}

	_createClass(MapBuilder, [{
		key: 'getId',
		value: function getId(cityName) {
			if (CoordMap.hasOwnProperty(cityName)) {
				return CoordMap[cityName].id;
			}
			return null;
		}
	}, {
		key: 'getPoint',
		value: function getPoint(cityName) {
			if (CoordMap.hasOwnProperty(cityName)) {
				return CoordMap[cityName].center;
			}
			return null;
		}

		//获取地图中心点

	}, {
		key: 'getCenter',
		value: function getCenter() {
			return [this.left * 0.5 + this.right * 0.5, this.bottom * 0.5 + this.top * 0.5];
		}

		//获取地图全部显示的比例

	}, {
		key: 'getFullScale',
		value: function getFullScale() {
			var cScale = WIDTH / HEIGHT;
			var mScale = (this.right - this.left) / (this.bottom - this.top);
			var scale = cScale > mScale ? HEIGHT / (this.bottom - this.top) : WIDTH / (this.right - this.left);
			return scale * ZOOM;
		}
	}]);

	return MapBuilder;
}();

module.exports = MapBuilder;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Config = __webpack_require__(0);
var Comment = __webpack_require__(1);
var line = d3.line().curve(d3.curveCatmullRom).x(function (d) {
    return d[0];
}).y(function (d) {
    return d[1];
});

var Bar = function (_Comment) {
    _inherits(Bar, _Comment);

    function Bar() {
        _classCallCheck(this, Bar);

        return _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).apply(this, arguments));
    }

    _createClass(Bar, [{
        key: 'setData',


        //设置柱状图
        value: function setData(arr) {
            var self = this;
            Config.GLOBAL_SVG.selectAll('.v-bar').data([]).exit().remove();
            if (arr.length <= 0) {
                return;
            }

            var min = _.minBy(arr, 'count').count;
            var max = _.maxBy(arr, 'count').count;
            var heightScale = d3.scaleLinear().domain([min, max]).range([Config.Bar.HeightMin, Config.Bar.HeightMax]);
            var barsGroup = Config.GLOBAL_SVG.selectAll('rect.v-bar').data(arr).enter().append('rect').attr('class', 'v-bar').attr('x', function (d) {
                return Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.area))[0] - Config.Bar.Width / 2;
            }).attr('y', function (d) {
                return Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.area))[1];
            }).attr('width', Config.Bar.Width).attr('height', 0).attr('rx', Config.Bar.Radius).attr('ry', Config.Bar.Radius);

            barsGroup.transition().duration(Config.Bar.Effect).attr('y', function (d) {
                return Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.area))[1] - heightScale(d.count);
            }).attr("height", function (d) {
                return heightScale(d.count);
            });

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
    }, {
        key: 'resize',
        value: function resize() {
            Config.GLOBAL_SVG.selectAll('rect.v-bar').attr('x', function (d) {
                return Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.area))[0] - Config.Bar.Width / 2;
            }).attr('y', function (d) {
                return Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.area))[1];
            });
        }
    }]);

    return Bar;
}(Comment);

module.exports = new Bar();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Config = __webpack_require__(0);
var Comment = __webpack_require__(1);
var line = d3.line().curve(d3.curveCatmullRom).x(function (d) {
    return d[0];
}).y(function (d) {
    return d[1];
});

var Line = function (_Comment) {
    _inherits(Line, _Comment);

    function Line() {
        _classCallCheck(this, Line);

        return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
    }

    _createClass(Line, [{
        key: 'setData',


        //添加一个区域到另外一个区域的线条组
        value: function setData(arr) {
            var self = this;
            arr.map(function (item) {
                item.__id = '_line_' + self.GenId();
            });

            Config.GLOBAL_SVG.selectAll('.v-group-line').data([]).exit().remove();
            var linesGroup = Config.GLOBAL_SVG.selectAll('g.v-group-line').data(arr).enter().append('g').attr('class', 'v-group-line').attr('id', function (d) {
                return d.__id;
            });
            linesGroup.append('path').attr('class', 'v-line').attr('id', function (d) {
                return d.__id + '_path';
            }).attr('d', function (d) {
                var from = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.from));
                var to = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.to));
                var data = [from, [from[0] + (to[0] - from[0]) / 4, from[1] + (to[1] - from[1]) / 2], [from[0] + (to[0] - from[0]) * 3 / 4, to[1]], to];
                return line(data);
            });

            linesGroup.append('circle').attr('class', 'v-line-point').attr('r', Config.Line.PointRadius).attr('cx', 0).attr('cy', 0).append('animateMotion').attr('begin', '0s').attr('dur', _.random(Config.Line.EffectMin, Config.Line.EffectMax) / 1000 + 's').attr('repeatCount', 'indefinite').append('mpath').attr('xlink:href', function (d) {
                return '#' + d.__id + '_path';
            });

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
    }, {
        key: 'resize',
        value: function resize() {
            Config.GLOBAL_SVG.selectAll('g.v-group-line path').attr('d', function (d) {
                var from = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.from));
                var to = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d.to));
                var data = [from, [from[0] + (to[0] - from[0]) / 4, from[1] + (to[1] - from[1]) / 2], [from[0] + (to[0] - from[0]) * 3 / 4, to[1]], to];
                return line(data);
            });
        }
    }]);

    return Line;
}(Comment);

module.exports = new Line();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Config = __webpack_require__(0);
var Comment = __webpack_require__(1);

var Point = function (_Comment) {
    _inherits(Point, _Comment);

    function Point() {
        _classCallCheck(this, Point);

        return _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).apply(this, arguments));
    }

    _createClass(Point, [{
        key: 'setData',


        //地图上绘制点
        value: function setData(arr) {
            Config.GLOBAL_SVG.selectAll('circle.v-point').data([]).exit().remove();
            Config.GLOBAL_SVG.selectAll('circle.v-point').data(arr).enter().append('circle').attr('class', 'v-point').attr('cx', function (d) {
                return Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d))[0];
            }).attr('cy', function (d) {
                return Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d))[1] - 12;
            }).attr('r', Config.Point.Start).append('animate').attr('attributeName', 'r').attr('attributeType', 'xml').attr('form', Config.Point.RadiusMin).attr('to', Config.Point.RadiusMax).attr('begin', '0s').attr('dur', function (d) {
                return _.random(Config.Point.EffectMin, Config.Point.EffectMax) / 1000 + 's';
            }).attr('repeatCount', 'indefinite');
        }
    }, {
        key: 'resize',
        value: function resize() {
            Config.GLOBAL_SVG.selectAll('circle.v-point').attr('cx', function (d) {
                return Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d))[0];
            }).attr('cy', function (d) {
                return Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(d))[1] - 12;
            });
        }
    }]);

    return Point;
}(Comment);

module.exports = new Point();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Config = __webpack_require__(0);
var Comment = __webpack_require__(1);
var line = d3.line().curve(d3.curveCatmullRom).x(function (d) {
    return d[0];
}).y(function (d) {
    return d[1];
});

var Fly = function (_Comment) {
    _inherits(Fly, _Comment);

    function Fly() {
        _classCallCheck(this, Fly);

        return _possibleConstructorReturn(this, (Fly.__proto__ || Object.getPrototypeOf(Fly)).apply(this, arguments));
    }

    _createClass(Fly, [{
        key: 'fly',


        //从任意一个点飞到一个地区的中心点
        value: function fly(from, to, callback) {
            if (_.isString(from)) {
                from = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(from));
            }
            if (_.isString(to)) {
                to = Config.GLOBAL_PROJECTION(Config.GLOBAL_BUILDER.getPoint(to));
            }
            var data = [from, to];
            Config.GLOBAL_SVG.append('path').datum(data).attr('class', 'v-fly-line').transition().duration(_.random(Config.Fly.EffectMin, Config.Fly.EffectMax)).attrTween('d', function (d) {
                var h = d[1][0] - d[0][0];
                var v = d[1][1] - d[0][1];

                var _d$ = _slicedToArray(d[0], 2),
                    x = _d$[0],
                    y = _d$[1];

                return function (t) {
                    var cx = x,
                        cy = y;

                    if (t > 0.2 && t <= 0.8) {
                        cx = x + d3.easeSinOut(t - 0.2) * h;
                        cy = y + d3.easeSinIn(t - 0.2) * v;
                    } else if (t > 0.8) {
                        cx = x + d3.easeSinOut(2 * t - 1) * h;
                        cy = y + d3.easeSinIn(2 * t - 1) * v;
                    }
                    var tx = x + d3.easeSinOut(t) * h,
                        ty = y + d3.easeSinIn(t) * v;

                    return line([[cx, cy], [cx + (tx - cx) / 3, cy + (ty - cy) / 4], [tx, ty]]);
                };
            }).on('end', function () {
                if (callback) {
                    callback.call(null);
                }
            }).remove();
        }
    }]);

    return Fly;
}(Comment);

module.exports = new Fly();

/***/ })
/******/ ]);