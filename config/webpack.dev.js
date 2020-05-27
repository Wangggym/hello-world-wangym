const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
    watch: true,
    mode: 'development',
    devtool: 'source-map',
});
