import path from "path";
import merge from "webpack-merge";

const ROOT_PATH = path.join(__dirname, "../..");

/**
 * Common config for webpack
 * @type {Object}
 */
const defaultConfig = {
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName:
                                    "[name]__[local]--[hash:base64:5]",
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: "asset/inline",
                loader: "file-loader",
                include: path.resolve(__dirname, "./src/assets"),
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: [{ loader: "@svgr/webpack", options: { icon: true } }],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            assets: path.join(ROOT_PATH + "/src/assets"),
            api: path.join(ROOT_PATH + "/src/api"),
            components: path.join(ROOT_PATH + "/src/components"),
            constants: path.join(ROOT_PATH + "/src/constants"),
            hooks: path.join(ROOT_PATH + "/src/hooks"),
            pages: path.join(ROOT_PATH + "/src/pages"),
            providers: path.join(ROOT_PATH + "/src/providers"),
            public: path.join(ROOT_PATH + "/src/public"),
            routes: path.join(ROOT_PATH + "/src/routes"),
            store: path.join(ROOT_PATH + "/src/store"),
            utils: path.join(ROOT_PATH + "/src/utils"),
            styles: path.join(ROOT_PATH + "/src/styles"),
        },
    },
};

/**
 * Build config for webpack from default
 *
 * @param {Object} options The options
 * @returns {Object} Retruns a new config
 */
function configure(options: Object) {
    return merge(defaultConfig, options);
}

export default configure;
