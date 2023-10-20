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
      postcss: {
        plugins: [
          require("postcss-px2rem-exclude")({
            remUnit: 75,// 这里的16数字要和rem.js里面的一致
            exclude: "/node_modules/i",
          }),
        ],
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
