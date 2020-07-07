module.exports = {
    "lintOnSave": false,
    "transpileDependencies": [
        "vuetify"
    ],
    devServer: {
        proxy: {
            "^/fixtures": {
                target: "/fixtures",
                changeOrigin: true
            }
        }
    }
}