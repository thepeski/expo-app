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
                        "@components": "./src/components",
                        "@constants": "./src/constants",
                        "@contexts": "./src/contexts",
                        "@dev": "./src/dev",
                        "@firebaseConfig": "./firebaseConfig",
                        "@fonts": "./assets/fonts",
                        "@hooks": "./src/hooks",
                        "@images": "./assets/images",
                        "@screens": "./src/screens",
                        "@services": "./src/services",
                        "@utils": "./src/utils",
                        "@views": "./src/views"
                    },
                },
            ],
        ],
    };
};