const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: path.resolve(__dirname, 'src/static/index.js'),
    output: {
        path: path.resolve(__dirname, 'src/static/build'),
        filename: 'index.js',
        chunkFilename: '[name].js',
        publicPath: '/static/build/'
    },
    mode: NODE_ENV,
    module: {
        rules: [ {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader']
        }, {
            test: /\.png$/,
            loader: 'url-loader',
            options: {
                limit: 1024 * 10,
                name: '[name].[ext]'
            }
        } ]
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'src/static/images')
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
