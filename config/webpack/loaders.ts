import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {typeWebpackConfigOptions} from "./types";
import ReactRefreshTypeScript from "react-refresh-typescript";

export const getLoaders = (options: typeWebpackConfigOptions) => {

    // Assets
    const assetLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|gif|woff|woff2)$/i,
        type: 'asset/resource',

    };

    // SVG
    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
            }
        ],
    }

    // Styles
    const styleLoader: webpack.RuleSetRule = {
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
    };

    // TypeScript
    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: options.isDev,
                getCustomTransformers: () => ({
                    before: [options.isDev && ReactRefreshTypeScript()].filter(Boolean),
                }),
            }
        },
        exclude: /node_modules/,
    };

    const loaders: webpack.ModuleOptions['rules'] = [
        svgLoader,
        assetLoader,
        styleLoader,
        tsLoader,
    ];

    return loaders;
}
