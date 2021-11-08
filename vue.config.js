const publicPath = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: publicPath,
}
