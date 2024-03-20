const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/mmrr/',    //gitee远程库名
  outputDir: 'dist/',
  assetsDir: 'static/'
})
