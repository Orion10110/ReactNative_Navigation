module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          pages: './src/pages',
          routes: './src/routes',
          utils: './src/utils',
          components: './src/components'
        }
      }
    ]
  ]
}
