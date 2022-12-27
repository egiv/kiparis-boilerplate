import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import configure from "./webpack.common";

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const ROOT_PATH = path.join(__dirname, "../..");

const config: Configuration = configure({
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(ROOT_PATH, "dist"),
        publicPath: "/",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
    ],
});

export default config;
