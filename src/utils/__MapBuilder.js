const ZOOM = 48 * 0.9; //容器内缩放至 90%

var CoordMap = {},
	WIDTH = 0,
	HEIGHT = 0;

/**
 *  地图经纬度构造器
 */
class MapBuilder {

	/**
	 * 支持标准GeoJson 和 经过转换后的 topojson
	*/
	constructor(json, element) {
		[
			[this.left, this.top],
			[this.right, this.bottom]
		] = d3.geoBounds(json);
		[WIDTH, HEIGHT] = [element.clientWidth, element.clientHeight];
		window.addEventListener('resize', function () {
			[WIDTH, HEIGHT] = [element.clientWidth, element.clientHeight];
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

	getId(cityName){
		if (CoordMap.hasOwnProperty(cityName)) {
			return CoordMap[cityName].id;
		}
		return null;
	}

	getPoint(cityName) {
		if (CoordMap.hasOwnProperty(cityName)) {
			return CoordMap[cityName].center;
		}
		return null;
	}


	//获取地图中心点
	getCenter() {
		return [this.left * 0.5 + this.right * 0.5, this.bottom * 0.5 + this.top * 0.5];
	}

	//获取地图全部显示的比例
	getFullScale() {
		var cScale = WIDTH / HEIGHT;
		var mScale = (this.right - this.left) / (this.bottom - this.top);
		var scale = (cScale > mScale) ? HEIGHT / (this.bottom - this.top) : WIDTH / (this.right - this.left);
		return scale * ZOOM;
	}
}

module.exports = MapBuilder;