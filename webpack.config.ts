import {webpackConfig} from "./config/webpack/webpack.config";
import {typeEnv, typeWebpackConfigOptions} from "./config/webpack/types";
import path from "node:path";

const DEFAULT_PORT = 3000;

export default (env: typeEnv) => {

    if (!(env.mode === "development" || env.mode === "production")) console.warn("* Invalid mode parameter. The build in production mode.");

    const isDev = env.mode === "development";

    const port = Number(env.port) ? Number(env.port) : DEFAULT_PORT;

    const webpackConfigOptions: typeWebpackConfigOptions = {
        mode: isDev ? "development" : "production",
        port: port,
        paths: {
            entry: path.resolve(__dirname, 'index.tsx'),
            output: path.resolve(__dirname, "dist"),
            html: path.resolve(__dirname, 'public', 'index.html'),
            static: path.join(__dirname, 'public'),
            resource: path.join(__dirname, 'src'),
        },
        isDev: isDev,
        analyzer: !!env.analyzer,
    };

    return webpackConfig(webpackConfigOptions);

};
