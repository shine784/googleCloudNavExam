module.exports = {
  presets: ["@babel/preset-react",'@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-async-to-generator', {}],
    ['@babel/plugin-transform-runtime', { regenerator: true }],
    ['@babel/plugin-syntax-dynamic-import'],
    ["@babel/plugin-transform-react-jsx"],
  ],
};
