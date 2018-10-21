const presetEnvCfg = {
  modules: false,
  useBuiltIns: 'entry',
  targets: {node: 'current'}
};

module.exports = {
  presets: [['@babel/preset-env', presetEnvCfg]],
  plugins: ['@babel/plugin-proposal-object-rest-spread']
};
