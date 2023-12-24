import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {typeWebpackConfigOptions} from "./types";

export const getDevServerConfig = (options: typeWebpackConfigOptions) => {
    const devServer: DevServerConfiguration = {
        static: {
            directory: options.paths.static,
        },
        client: {
            reconnect: false,
        },
        compress: true,
        port: options.port,
        open: true,
        historyApiFallback: true,
    }
    return devServer;
}
