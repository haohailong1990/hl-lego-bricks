module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ["**/tests/unit/LText.spec.ts"],
  transformIgnorePatterns:[
    "/!node_modules\\/lodash-es/"
  ]
}
