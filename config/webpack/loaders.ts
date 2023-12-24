import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {typeWebpackConfigOptions} from "./types";

export const getLoaders = (options: typeWebpackConfigOptions) => {

    const scssLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: true,
                        localIdentName: options.isDev ? "[path][name]__[local]": "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    }

    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const loaders: webpack.ModuleOptions['rules'] = [
        scssLoader,
        tsLoader,
    ]

    return loaders;
}
