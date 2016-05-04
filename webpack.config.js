const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/main',
        vendor: './src/vendor'
    },
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js'],
        alias: {
            '@angular/core': 'node_modules/@angular/core/index.js',
            '@angular/testing': 'node_modules/@angular/core/testing.js',
            '@angular/platform/browser': 'node_modules/@angular/platform-browser/index.js',
            '@angular/router': 'node_modules/@angular/router-deprecated/index.js',
            '@angular/http': 'node_modules/@angular/http/index.js',
            '@angular/http/testing': 'node_modules/@angular/http/testing.js',
            '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/index.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /\.d\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: '[name].js'
        })
    ]
};