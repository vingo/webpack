var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
/**
 * [导出config setting ,webpack build后生成文件 common.js,entry.bundle.js]
 * @type {Object}
 */
module.exports = {

    //页面入口文件配置
    entry: {
        entry: './entry.js'
            //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
            //page2: ["./entry1", "./entry2"]
    },
    //入口文件输出配置
    output: {
        path: './bin', //folder
        filename: '[name].bundle.js'
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css?sourceMap'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    //其它解决方案配置
    resolve: {
        root: 'E:/node_project_vingo/webpack/demo_step2', //绝对路径
        extensions: ['', '.js', '.json', 'css'],
        alias: {
            AppEntry: './entry.js', //后续直接 require('AppEntry')
            appData: './context.js'
        }
    },
    //插件项
    plugins: [commonsPlugin]
};