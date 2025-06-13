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
                        "@contexts": "./src/contexts",
                        "@dev": "./src/dev",
                        "@firebaseConfig": "./firebaseConfig",
                        "@fonts": "./assets/fonts",
                        "@hooks": "./src/hooks",
                        "@images": "./assets/images",
                        "@services": "./src/services",
                        "@utils": "./src/utils",
                    },
                },
            ],
        ],
    };
};