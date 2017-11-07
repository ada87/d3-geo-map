//配置项模型，固定一个extend方法，不能覆盖
var Config = {
    extend:function(data){
        _.merge(Config,data);
    }
};

module.exports = Config;