const path = require('node:path');

module.exports = (env) => ({
    mode: env.mode === "development" ? "development" : "production",
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
});
