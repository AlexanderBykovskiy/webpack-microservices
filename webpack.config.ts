import {webpackConfig} from "./config/webpack/webpack.config";
import {typeEnv, typeWebpackConfigOptions} from "./config/webpack/types";
import path from "node:path";

export default (env: typeEnv) => {

    const isDev = env.mode === "development";

    const port = Number(env.port) ? Number(env.port) : 3000;

    const webpackConfigOptions: typeWebpackConfigOptions = {
        mode: isDev ? "development" : "production",
        port: port,
        paths: {
            entry: path.resolve(__dirname, 'index.tsx'),
            output: path.resolve(__dirname, "dist"),
            html: path.resolve(__dirname, 'public', 'index.html'),
            static: path.join(__dirname, 'public'),
        },
        isDev: isDev,
    };

    return webpackConfig(webpackConfigOptions);

};
