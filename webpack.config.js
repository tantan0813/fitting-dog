var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var banner = 'lastmodify: ' + new Date().toLocaleString();

var config = {
    entry: {
        //test:'./public/src/js/app/test/main',
    }, //演示单入口文件
    output: {
        path: path.join(__dirname, './dest/hotel'),   //打包输出的路径
        filename: '[name].min.js',                              //打包后的名字
        //publicPath:"../../dest/hotel/js/",                     //html引用路径，在这里是本地地址。
        chunkFilename : '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)(-lazy)?$/,
                exclude: /node_modules/,
                loader : 'babel-loader',
                discardComments: {removeAll: true}
            },{
                test: /\.less$/, loader: 'style!css!less'
            },{
                test: /\.css$/, loader: "style-loader!css-loader"
            },{
                test: /\.html$/,
                loader: "text"
            },{
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }/*,{ 
                test: require.resolve("react"), loader: "expose?$!expose?React" 
            },{ 
                test: require.resolve("react-dom"), loader: "expose?$!expose?ReactDOM" 
            }*/
        ],
        postLoaders : [{
                test: /\.(js|jsx)(-lazy)?$/,
                loaders: ['es3ify-loader']
            }, 
            // 这个配置放到打包到生产环境中去，测试环境打到一个包
            {
                test: /-lazy\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'bundle-loader?lazy&name=[name]'
            }
        ]
    },
    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/]
    },
    resolve:{
        extensions:['','.js','.json','less','scss','html'],
        root: path.dirname(__dirname),
        alias: {
            'jquery' : path.join(__dirname,'../scripts/core/jquery-3.1.0.min'),
            'zepto' : path.join(__dirname,'../scripts/core/zepto'),
            'ga':path.join(__dirname,'../scripts/utils/util.ga'),
            'ga360':path.join(__dirname,'../scripts/utils/util.ga-360'),
            'lazyload' : path.join(__dirname,'../scripts/widget/lazyload'),
            'es5' : path.join(__dirname,'../scripts/core/es5'),
        }
    },
    resolveLoader: {
        root: path.join(__dirname, './node_modules')
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.BannerPlugin(banner, {
            entryOnly: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production"),
            },
        }),
        /*new webpack.optimize.CommonsChunkPlugin({
            name : ["common"],
            minChunks: 2 
        })*/

    ]
};
Object.assign(config.resolve.alias);
module.exports = config;