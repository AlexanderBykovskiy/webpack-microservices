import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";

interface typeEnv {
    mode: string,
    port: number,
}

export default (env: typeEnv) => {

    const isDev = env.mode === "development";

    const port = Number(env.port) ? Number(env.port) : 3000;

    const devServer: DevServerConfiguration = {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        client: {
            reconnect: false,
        },
        compress: true,
        port: port,
        open: true,
    }

    const config: Configuration = {
        mode: isDev ? "development" : "production",
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "dist"),
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
            new webpack.ProgressPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    }

    if (isDev) {
        config.devServer = devServer;
        config.devtool = 'inline-source-map';
    }

    return config;

};
