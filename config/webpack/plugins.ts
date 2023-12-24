import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {typeWebpackConfigOptions} from "./types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export const getPlugins = (options: typeWebpackConfigOptions) => {

    const plugins: webpack.Configuration['plugins'] = [];

    plugins.push(new HtmlWebpackPlugin({template: options.paths.html}));

    if (!options.isDev) {

        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));

        if (options.analyzer) plugins.push(new BundleAnalyzerPlugin());

    }

    if (options.isDev) {

        plugins.push(new webpack.ProgressPlugin());

        plugins.push(new ForkTsCheckerWebpackPlugin());

    }

    return plugins;
}
