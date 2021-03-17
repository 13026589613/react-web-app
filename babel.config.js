module.exports = {
  presets: [
    'react-app',
    [
      'env',
      {
        targets: {
          browsers: ['>1%', 'last 3 versions'],
        },
      },
    ],
    'stage-0',
    'latest',
    'react',
  ],
  plugins: [
    'transform-runtime',
    'syntax-dynamic-import',
    'transform-decorators-legacy',
    'transform-class-properties',
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  // presets: ['module:metro-react-native-babel-preset'],
  // plugins: [
  //   ['@babel/plugin-proposal-decorators', { 'legacy': true }],
  //   ['import', { libraryName: '@ant-design/react-native' }] // 与 Web 平台的区别是不需要设置 style
  // ]
}
