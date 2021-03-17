const CracoLessPlugin = require('craco-less')
const CracoAlias = require('craco-alias')

const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

function resolve(dir) {
  return path.join(__dirname, dir)
}

console.log(resolve('src'))

/**
 * @description craco 配置 webpack
 */
module.exports = {
  webpack: {
    alias: {
      '@root': pathResolve('.'),
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@common': pathResolve('src/common'),
      '@c': pathResolve('src/components'),
      '@hook': pathResolve('src/hook'),
      '@view': pathResolve('src/view'),
      '@store': pathResolve('src/store'),
      '@util': pathResolve('src/util'),
    },
  },
  // plugins: [
  //   {
  //     plugin: CracoAlias,
  //     options: {
  //       source: 'tsconfig',
  //       baseUrl: './src',
  //       tsConfigPath: './tsconfig.path.json',
  //     },
  //   },
  // ],
  // babel: {
  //   plugins: [
  //     ['import', { libraryName: 'antd', style: true }],
  //     ['@babel/plugin-proposal-decorators', { legacy: true }],
  //   ],
  // },
  // plugins: [
  //   {
  //     plugin: CracoLessPlugin,
  //     options: {
  //       // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
  //       lessLoaderOptions: {
  //         lessOptions: {
  //           modifyVars: {},
  //           javascriptEnabled: true,
  //         },
  //       },
  //     },
  //   },
  // ],
}
