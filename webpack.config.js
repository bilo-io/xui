var webpack = require('webpack');
var path = require('path');
var DIST = path.resolve(__dirname, 'dist/');
var SRC = path.resolve(__dirname, 'src/');
var marked = require('marked');
var renderer = new marked.Renderer();

const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    devtool: 'source-maps',
    entry: SRC + '/index.js',
    output: {
        path: DIST,
        publicPath: '/dist',
        filename: 'index.js',
        library: ["XUI"],
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(css|scss)$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            exclude: /node_modules/
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[ext]',
        }, {
            test: /\.md$/,
            use: [
                {
                    // loader: 'html-loader'
                // }, {
                    loader: 'markdown-loader',
                    options: {
                        pedantic: true,
                        renderer
                    }
                }
            ]
        }]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './src/bilo-ui.scss', to: './'},
            {from: './src/scss', to: './scss'}
        ])
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },
    // node: {
    //     fs: 'empty'
    // }
};

module.exports = config;