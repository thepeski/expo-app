/* babel.config.js */

module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                    alias: {
                        "@dev": "./src/dev",
                        "@fonts": "./assets/fonts",
                        "@utils": "./src/utils",
                    },
                },
            ],
        ],
    };
};