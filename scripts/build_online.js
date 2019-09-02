const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const webpackConfig = require('../build/webpack.production.js');


webpackConfig.plugins = webpackConfig.plugins || [];
webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        "__ENV__": JSON.stringify('online'),
    })
);

rimraf(path.resolve('./dist/static'), (err) => {
    if (err) {
        console.log('delete static files error');
        return;
    }

    const compiler = webpack(webpackConfig);
    compiler.run((err, stats) => {
        if (err) {
            console.error(err.stack || err);
            if (err.details) {
                console.error(err.details);
            }
            return;
        }

        const info = stats.toJson();

        if (stats.hasErrors()) {
            console.error(info.errors);
        }

        if (stats.hasWarnings()) {
            console.warn(info.warnings);
        }

        console.log(stats.toString({
            chunks: false,  // 使构建过程更静默无输出
            colors: true    // 在控制台展示颜色
        }));
    });
})