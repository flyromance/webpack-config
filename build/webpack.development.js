const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base');

module.exports = {
    mode: 'development',
    // - devtool: 'eval',
    // - cache: true,
    // - performance: {
    // -   hints: false
    // - },
    // - output: {
    // -   pathinfo: true
    // - },
    // - optimization: {
    // -   namedModules: true,
    // -   namedChunks: true,
    // -   nodeEnv: 'development',
    // -   flagIncludedChunks: false,
    // -   occurrenceOrder: false,
    // -   sideEffects: false,
    // -   usedExports: false,
    // -   concatenateModules: false,
    // -   splitChunks: {
    // -     hidePathInfo: false,
    // -     minSize: 10000,
    // -     maxAsyncRequests: Infinity,
    // -     maxInitialRequests: Infinity,
    // -   },
    // -   noEmitOnErrors: false,
    // -   checkWasmTypes: false,
    // -   minimize: false,
    // - },
    // - plugins: [
    // -   new webpack.NamedModulesPlugin(),
    // -   new webpack.NamedChunksPlugin(),
    // -   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
    // - ]
    devtool: "none", // development对应eval
    optimization: {
        splitChunks: {
            
        },
        runtimeChunk: {
            name: "manifest",
        },    
    },
    entry: {
        main: path.resolve('./src/index.js'),
    },
    output: {
        path: path.resolve('./dist/static'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js'
    },
    module: {
        rules: []
    },

    plugins: [
        // CommonsChunkPlugin已经被移除了
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "manifest",
        //     minChunks: Infinity
        // }),
    ],
}