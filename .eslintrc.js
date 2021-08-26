// eslintrc.js
module.exports = {
  "parser":  '@typescript-eslint/parser',
  "extends": ['plugin:@typescript-eslint/recommended'],
  "plugins": ['@typescript-eslint'],
  "env": {
      "browser": true,
      "es6": true
  },
  "rules": {
    "semi": ["error", "never"], // 禁止使用分号
  }
}





