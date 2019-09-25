// 后端请求地址 注意[他会根据你环境的不同从而获取的 env 文件不同]
const target = 'http://127.0.0.1:8181';
module.exports = {
    // 基本路径
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    chainWebpack: () => { },
    configureWebpack: () => { },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    parallel: require('os').cpus().length > 1,

    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: target,
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^api': ''
                }
            }
        }, // 设置代理
        before: app => { }
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}