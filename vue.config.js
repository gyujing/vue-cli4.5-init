const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  // 选项...
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        sassOptions: { outputStyle: 'expanded' },
      },
    },
  },
  configureWebpack: (config) => {
    return {
      resolve: {
        alias: {
          "@": resolve("src"),
        },
      },
    }
}
}
