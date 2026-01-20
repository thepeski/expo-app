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
                        "@icons": "./assets/icons",
                        "@images": "./assets/images",
                        "@layouts": "./src/layouts",
                        "@screens": "./src/screens",
                        "@services": "./src/services",
                        "@styles": "./src/styles",
                        "@types": "./src/types",
                        "@utils": "./src/utils",
                        "@views": "./src/views",
                    },
                },
            ],
        ],
    };
};