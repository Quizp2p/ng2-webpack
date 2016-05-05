const PATHS = require('./paths');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const METADATA = {
    title: 'Ng2 Webpack Config',
    baseUrl: '/'
};

module.exports = {
    metadata: METADATA,
    entry: {
        main: PATHS.main,
        vendor: PATHS.vendor,
        polyfills: PATHS.polyfills
    },
    resolve: {
        root: PATHS.root,
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
            },
            {
                test: /\.(html|css)$/,
                exclude: [PATHS.template],
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'polyfills'],
            filename: '[name].js'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};