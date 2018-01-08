const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        'rave': './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].min.js',
        library: 'VueRavePayment',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.(js|vue)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            include: /\.min\.js$/,
            compress: {
                warnings: false
            }
        })
    ],
    devtool: 'source-map'
}
