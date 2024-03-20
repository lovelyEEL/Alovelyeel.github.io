// export default defineConfig({
//   publicPath: "/mmrr/"
// })
const BASE_URL = process.env.NODE_ENV === "production" ? "/mmrr/" : "./";
export const publicPath = BASE_URL;
// import { defineConfig } from '@vue/cli-service'
// export default defineConfig({
//   transpileDependencies: true,
//   publicPath: '/mmrr/',    //gitee远程库名
//   outputDir: 'dist/',
//   assetsDir: 'static/'
// })
