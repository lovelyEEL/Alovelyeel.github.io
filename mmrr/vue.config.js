module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/mmrr'
        : '/'
    ,
    productionSourceMap: false,
}
