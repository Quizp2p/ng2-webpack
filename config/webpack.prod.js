const commonConfig = require('./webpack.common.js');
const PATHS = require('./paths');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackMd5Hash = require('webpack-md5-hash');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const METADATA = webpackMerge(commonConfig.metadata, {
    ENV: 'production'
});

module.exports = webpackMerge(commonConfig, {
    metadata: METADATA,
    devtool: 'source-map',
    output: {
        path: PATHS.dist,
        filename: 'bundle.[chunkhash].js',
        publicPath: '/dist/'
    },
    plugins: [
        new WebpackMd5Hash(),
        new DedupePlugin(),
        new CommonsChunkPlugin({
            names: ['vendor'],
            filename: '[name].[chunkhash].js'
        }),
        new DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV)
        }),
        new UglifyJsPlugin({
            // beautify: true, //debug
            // mangle: false, //debug
            // dead_code: false, //debug
            // unused: false, //debug
            // deadCode: false, //debug
            // compress: {
            //   screw_ie8: true,
            //   keep_fnames: true,
            //   drop_debugger: false,
            //   dead_code: false,
            //   unused: false
            // }, // debug
            // comments: true, //debug

            beautify: false, //prod

            mangle: {
                screw_ie8: true,
                keep_fnames: true
            }, //prod

            compress: {
                screw_ie8: true
            }, //prod

            comments: false //prod
        })
    ]

});