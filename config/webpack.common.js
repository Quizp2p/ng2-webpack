const PATHS = require('./paths');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint'
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                exclude: /\.d\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.html$/,
                exclude: [PATHS.template],
                loader: 'html'
            },
            {
                test: /\.less$/,
                exclude: [/node_modules/, PATHS.app],
                loader: ExtractTextPlugin.extract('style', 'css!less')
            },
            {
                test: /\.less$/,
                include: [PATHS.app],
                loader: 'raw!less'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.template
        }),
        new CopyWebpackPlugin([{
            from: PATHS.assets,
            to: PATHS.dist
        }])
    ],
    htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
        ],
        customAttrAssign: [/\)?\]?=/]
    },
    tslint: {
        configuration: require('../tslint.json'),
        failOnHint: true
    }
};