const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    //   mode: 'development',
    mode: "production",

    entry: {
        "phaser-core": `./phaser-core.js`,
        "phaser-core.min": "./phaser-core.js",
    },

    resolve: {
        alias: {
            eventemitter3: path.resolve(
                __dirname,
                "./node_modules/eventemitter3",
            ),
        },
        modules: ["node_modules/phaser/src"],
    },

    output: {
        path: `${__dirname}/dist/`,
        filename: "[name].js",
        library: "Phaser",
        libraryTarget: "umd",
        sourceMapFilename: "[file].map",
        devtoolModuleFilenameTemplate: "webpack:///[resource-path]",
        devtoolFallbackModuleFilenameTemplate:
            "webpack:///[resource-path]?[hash]",
        umdNamedDefine: true,
    },

    performance: { hints: false },

    optimization: {
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            "typeof CANVAS_RENDERER": JSON.stringify(true),
            "typeof WEBGL_RENDERER": JSON.stringify(true),
            "typeof WEBGL_DEBUG": JSON.stringify(false),
            "typeof EXPERIMENTAL": JSON.stringify(false),
            "typeof PLUGIN_3D": JSON.stringify(false),
            "typeof PLUGIN_CAMERA3D": JSON.stringify(false),
            "typeof PLUGIN_FBINSTANT": JSON.stringify(false),
            "typeof FEATURE_SOUND": JSON.stringify(true),
        }),

        new CleanWebpackPlugin(),
    ],

    devtool: "source-map",
};
