'use strict';
var cleanPlugin = require('clean-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var config = {
    context: path.resolve(__dirname, 'app'),
    entry: './app.module.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    resolve: {
        alias: {
            'npm': path.resolve(__dirname, 'node_modules')
        },
        extensions: ['.js', '.css', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'ng-annotate-loader'
                    },
                    {
                        loader: 'babel-loader'
                    }],
                include: path.resolve(__dirname, 'app'),
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2)$/,
                use: [{
                    loader: 'file-loader?limit=1024&name=fonts/[name].[ext]'
                }]
            },
            {
                test: /\.(eot|svg|ttf)$/,
                use: [{
                    loader: 'file-loader?limit=1024&name=fonts/[name].[ext]'
                }]
            }
        ]
    },
    plugins: [
        new cleanPlugin(['dist']),
        new ngAnnotatePlugin({
            add: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = config;