module.exports = {
  lintOnSave: false,
  assetsDir: 'static',
  parallel: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mmrr/'
    : '/'
}
