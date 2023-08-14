// https://zh-hans.eslint.org/
module.exports = {
  extends: [
    // vue的eslint  https://eslint.vuejs.org/user-guide/
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-essential'
  ],
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    parser: '@typescript-eslint/parser',
    // https://typescript-eslint.io/linting/typed-linting/monorepos/#one-tsconfigjson-per-package-and-an-optional-one-in-the-root
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
    vueFeatures: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  root: true,
  rules: {
    // 不安全的参数 any类型 这个设置project时就用不成，但是设置了project格式化vue的jsx/tsx部分就会报错，先不用这个了，后续观望一下
    '@typescript-eslint/no-unsafe-argument': 'warn'
  }
}
