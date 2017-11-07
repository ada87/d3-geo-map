# D3-GEO-MAP

[点击这里看一个DEMO](http://www.xdnote.com/test/d3-geo-map/index.html);

## 项目说明

D3-GEO-MAP 是一个基于 `d3.js(v4)`,和 `lodash` 的地图绘制工具包。特性：

1. 支持 GeoJson格式（需要 `properties` 中至少有个 `name` 属性，目前在各地下载的基本都有这个属性），推荐的下载地址为 ：[阿里云-datav的下载](https://datav.aliyun.com/static/tools/atlas)。这个版本的地图包含已经计算好的中心点以及上下级的级联数据，方便后续自行扩展功能。
2. 通过滤镜实现了一个 `伪3D` 的效果。地图看上去有一定的立体感。
3. 支持各种点击选中交互操作
4. 支持 条形图
5. 支持 地区连线
6. 支持 地区点
7. 支持 飞线
8. 支持Tips提示
9. 目前所有功能压缩后不到30k(如果分离些不需要的组件和scss，会更小)。
10. 暂未兼容 `TopoJson` ,如果使用的是 `TopoJson` ，可以直接修改源代码，在feature里面加一行代码即可实现兼容，如下


```javascript
features = topojson.feature(json,json.object.xxx).features;
```

## 使用说明


### 配置项

#### 地图配置

| 项        | 类型       | 说明                                       | 默认             |
| -------- | -------- | ---------------------------------------- | -------------- |
| RotateX  | Number   | 2.5D旋转角度，0为不旋转                           | 30             |
| Zoom     | Boolean  | 是否开启缩放平移功能，设置为 `false` 不开启               | true           |
| OnSelect | Function | 地图选中后的回调函数                               | null           |
| Shadow   | Object   | 伪3D阴影设置，如果不需要可以设置为 `null` 或 `false` <br> 默认配置在右下方产生5个单位相互阴影 | {Left:5,Top:5} |

#### 条形图配置 Bar

| 项            | 类型       | 说明                  | 默认   |
| ------------ | -------- | ------------------- | ---- |
| Effect       | Number   | 条形出现的过滤时间（毫秒）       | 2000 |
| Width        | Number   | 宽度                  | 8    |
| HeightMin    | Number   | 最低高度                | 10   |
| HeightMin    | Number   | 最高高度                | 60   |
| Radius       | Number   | 圆角                  | 2    |
| OnMouserOver | Function | 鼠标移到条形图上事件，接收线条自身数据 | null |
| OnMouserOut  | Function | 鼠标移出条形图事件，接收线条自身数据  | null |
| OnClick      | Function | 鼠标点击条形图后事件，接收线条自身数据 | null |

#### 线条配置 Line

| 项            | 类型       | 说明                 | 默认   |
| ------------ | -------- | ------------------ | ---- |
| EffectMin    | Number   | 最少飞行时间             | 2000 |
| EffectMax    | Number   | 最大飞行时间             | 4000 |
| PointRadius  | Number   | 飞行点的半径             | 1.5  |
| OnMouserOver | Function | 鼠标移到线条上事件，接收线条自身数据 | null |
| OnMouserOut  | Function | 鼠标移出线条事件，接收线条自身数据  | null |
| OnClick      | Function | 鼠标点击线条后事件，接收线条自身数据 | null |



#### 标记点配置 Point

| 项         | 类型     | 说明     | 默认   |
| --------- | ------ | ------ | ---- |
| EffectMin | Number | 最小扩散时间 | 2000 |
| EffectMax | Number | 最大扩散时间 | 4000 |
| RadiusMin | Number | 扩散起始半径 | 8    |
| RadiusMax | Number | 扩散终止半径 | 16   |


#### 飞线配置 Fly

| 项         | 类型     | 说明     | 默认   |
| --------- | ------ | ------ | ---- |
| EffectMin | Number | 最小飞行时间 | 2000 |
| EffectMax | Number | 最大飞行时间 | 4000 |




### 方法

| 方法        | 参数类型               | 说明          | 参数说明                                     |
| --------- | ------------------ | ----------- | ---------------------------------------- |
| setBars   | Array[Object]      | 设置条形图       | 数组，每个元素至少需要 `area`、`count` 两个属性<br>例如:`setBars([{area:'湖北省',count:100},{area:'湖南省',count:500}])` |
| setLines  | Array[Object]      | 设置地图连线      | 数组，每个元素至少需要 `from`、`to`两个属性<br>例如:`setLines([{from:'湖北省',to:'湖南省'},{from:'四川省',to:'上海市'}])` |
| setPoints | Array[String]      | 设置地图标记点     | 地区名数组，<br>例如:`setLines(['湖北省','湖南省','四川省','上海市'])` |
| fly       | from, to, callback | 设置地图飞线      | 说明：<br>1. from,to,即可以中一个地名，也可以是容器上的一个坐标点`[x,y]`<br>2. callback为选填参数，如果有传，则对飞线完成后会回调该方法<br> 例如：<br> 1. `map.fly([200,200],'湖南省')`, 2: `map.fly('湖北省','湖南省',function(){map.tip('The message','湖南省')})` |
| setColors | Array[Object]      | 设置各个地区的填充样式 | 数组，每个元素至少需要 `area`、`fill` 两个属性<br>例如:`setBars([{area:'湖北省',fill:'red'},{area:'湖南省',fill:'#cccccc'},{area:'四川省',fill:'rgba(0,0,5,0.5)'},{area:'上海市',fill:'url(#f-point)'},])` |
| showTip   | String,String      | 弹出一个Tip说明   | 第一个参数为需要显示的html,第二个参数为需要显示在目标位置，如果是D3本身的鼠标事件，可以不传第二个参数 |
| hideTip   |                    | 隐藏Tip       |                                          |


### 自定义样式

所有样式均在 `style.scss` 和 `style.html` 里面，可以根据自己需要进行扩展

### 总结

由于地图定制化很强，在各项目中都是千变万化，所以仅提供源码方式使用，鼓励将所需要的部分代码复制到实际的项目中，**根据实际要求修改并使用**。

本项目使用 `webpack`，通过 `git clone` 下来后，使用 `npm install` 后，再使用 `webpack`，再启个`http服务` 就可以看到上面的`demo`了。`demo`基本是一个功能的全集，代码可以进行参考。

本人的功力和时间都有限，只是总结了一些地图上各种元素的排布绘制API，源码还算的上是模块分明，尽量简单粗暴一点，改起来比较直接！


