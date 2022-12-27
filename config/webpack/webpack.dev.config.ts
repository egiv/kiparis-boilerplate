import Dotenv from "dotenv-webpack";
import ESLintPlugin from "eslint-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {
    Configuration as WebpackConfiguration,
    HotModuleReplacementPlugin,
} from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import configure from "./webpack.common";

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = configure({
    mode: "development",
    output: {
        publicPath: "/",
    },
    entry: "./src/index.tsx",
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new Dotenv(),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        static: path.join(__dirname, "build"),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true,
    },
});

export default config;
