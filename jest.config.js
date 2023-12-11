module.exports = {
  extensionsToTreatAsEsm: ['.ts'], // .tsファイルをECMAScriptモジュールとして扱う
  transform: {
    '^.+\\.ts$': 'ts-jest', // TypeScriptファイルを処理するためにts-jestトランスフォーマを使用
  },
};