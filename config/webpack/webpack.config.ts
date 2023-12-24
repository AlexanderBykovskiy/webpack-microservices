import webpack from "webpack";
import {getDevServerConfig} from "./dev-server.config";
import {getLoaders} from "./loaders";
import {getPlugins} from "./plugins";
import {getResolvers} from "./resolvers";
import {typeWebpackConfigOptions} from "./types";

export const webpackConfig = (options: typeWebpackConfigOptions) => {

    const config: webpack.Configuration = {
        mode: options.isDev ? "development" : "production",
        entry: options.paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: options.paths.output,
            clean: true,
        },
        plugins: getPlugins(options),
        module: {
            rules: getLoaders(options),
        },
        resolve: getResolvers(options),
    }

    if (options.isDev) {
        config.devServer = getDevServerConfig(options);
        config.devtool = 'inline-source-map';
    }

    return config;
}
