var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

//  Base配置 打包文件配置
var entry = {
    example: './example.js',
};


module.exports = {
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './node_modules/lodash/lodash.min.js',
                to: './lodash.min.js'
            },
            {
                from: './node_modules/d3/build/d3.min.js',
                to: './d3.min.js'
            },
            {
                from: './dat.gui.min.js',
                to: './dat.gui.min.js'
            }
        ])
    ],
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    // devtool: "source-map",
    module: {
        //加载器配置
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        "env",
                    ]
                }
            }, {
                test: /\.scss$/,
                loaders: 'style-loader!css-loader!sass-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            }
        ]
    },
    resolve: {
        modules: ['./src', './node_modules']
    },
};