// export default defineConfig({
//   publicPath: "/mmrr/"
// })

import { defineConfig } from '@vue/cli-service'
export default defineConfig({
  transpileDependencies: true,
  publicPath: '/mmrr/',    //gitee远程库名
  outputDir: 'dist/',
  assetsDir: 'static/'
})
