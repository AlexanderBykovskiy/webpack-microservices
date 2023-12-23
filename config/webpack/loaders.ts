import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {typeWebpackConfigOptions} from "./types";

export const getLoaders = (options: typeWebpackConfigOptions) => {

    const loaders: webpack.ModuleOptions['rules'] = [
        {
            test: /\.s[ac]ss$/i,
            use: [
                options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
            ],
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]

    return loaders;
}
