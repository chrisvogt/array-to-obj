const presetEnvCfg = {
  modules: false,
  useBuiltIns: 'entry',
  targets: {node: 'current'},
};

module.exports = {
  presets: [['@babel/preset-env', presetEnvCfg]],
  plugins: ['@babel/plugin-transform-object-rest-spread'],
};
