import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {typeWebpackConfigOptions} from "./types";

export const getPlugins = (options: typeWebpackConfigOptions) => {
    const plugins: webpack.Configuration['plugins'] = [];

    plugins.push(new HtmlWebpackPlugin({template: options.paths.html}));

    plugins.push(new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    }));

    plugins.push(new webpack.ProgressPlugin())

    return plugins;
}
