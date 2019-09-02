const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base');

module.exports = {
    mode: 'production',
    // - performance: {
    // -   hints: 'warning'
    // - },
    // - output: {
    // -   pathinfo: false
    // - },
    // - optimization: {
    // -   namedModules: false,
    // -   namedChunks: false,
    // -   nodeEnv: 'production',
    // -   flagIncludedChunks: true,
    // -   occurrenceOrder: true,
    // -   sideEffects: true,
    // -   usedExports: true,
    // -   concatenateModules: true,
    // -   splitChunks: {
    // -     hidePathInfo: true,
    // -     minSize: 30000,
    // -     maxAsyncRequests: 5,
    // -     maxInitialRequests: 3,
    // -   },
    // -   noEmitOnErrors: true,
    // -   checkWasmTypes: true,
    // -   minimize: true,
    // - },
    // - plugins: [
    // -   new TerserPlugin(/* ... */),
    // -   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
    // -   new webpack.optimize.ModuleConcatenationPlugin(),
    // -   new webpack.NoEmitOnErrorsPlugin()
    // - ]
    optimization: {
        splitChunks: {
            
        }
    },
    entry: {
        main: path.resolve('./src/index.js'),
    },
    output: {
        path: path.resolve('./dist/static'),
        filename: 'js/[name].[contenthash:8].js',
        chunkFilename: 'js/[name].[contenthash:8].js'
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