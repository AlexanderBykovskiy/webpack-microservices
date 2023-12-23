import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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
        entry: path.resolve(__dirname, 'index.tsx'),
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "dist"),
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
            new webpack.ProgressPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
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
