# D3-GEO-MAP

[点击这里看一个DEMO](http://www.xdnote.com/test/d3-geo-map/);

## 项目说明

D3-GEO-MAP 是一个基于 `d3.js(v4)`,和 `lodash` 的地图绘制工具包。特性：

1. 支持 GeoJson格式（需要 `properties` 中至少有个 `name` 属性，目前在各地下载的基本都有这个属性），推荐的下载地址为 ：[阿里云-datav的下载](https://datav.aliyun.com/static/tools/atlas)。这个版本的地图包含已经计算好的中心点以及上下级的级联数据，方便后续自行扩展功能。
2. 通过滤镜实现了一个 `伪3D` 的效果。地图看上去有一定的立体感。
3. 支持各种点击选中交互操作
3. 支持 条形图
4. 支持 地区连线
5. 支持 地区点
6. 支持 飞线
7. 支持Tips提示
8. 目前所有功能压缩后不到30k(如果分离些不需要的组件和scss，会更小)。
9. 暂未兼容 `TopoJson` ,如果使用的是 `TopoJson` ，可以直接修改源代码，在feature里面加一行代码即可实现兼容，如下


```javascript
features = topojson.feature(json,json.object.xxx).features;
```

## 使用说明

由于地图定制化很强，在各项目中都是千变万化，所以仅提供源码方式使用，鼓励将所需要的部分代码复制到项目中修改并使用。本项目使用webpack.

本人的功力和时间都有限，只是总结了一些地图上各种元素的排布绘制API，源码还算的上是模块分明，尽量简单粗暴一点，改起来比较直接！

### 配置项

#### 地图配置

|项|说明|默认|
|---|---|---|
|RotateX|2.5D旋转角度，0为不旋转|30|
|Zoom|是否开启缩放平移功能，设置为 `false` 不开启|true|
|OnSelect|地图选中后的回调函数|null|
|Shadow|伪3D阴影设置，如果不需要可以设置为 `null` 或 `false`| {Left:5,Top:5}|

#### 条形图配置 Bar



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




### 方法

### 自定义样式

所有样式均在 `style.scss` 和 `style.html` 里面，可以根据自己需要进行扩展