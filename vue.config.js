const { defineConfig } = require("@vue/cli-service");
const { resolve } = require("path");
// 配置
const CONFIG = {
    title: "文档" //页面标题
};

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        resolve: {
            alias: {
                "@": resolve("src")
            }
        }
    },
    chainWebpack: config => {
        config.plugin("html").tap(args => {
            args[0].title = CONFIG.title;
            return args;
        });
    }
});
