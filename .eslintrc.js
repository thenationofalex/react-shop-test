module.exports = {
  "parserOptions": {
    "ecmaVersion": 6
  },
  "extends": [
    "standard",
    "plugin:react/recommended"
  ],
  "plugins": [
    "emotion"
  ],
  "globals": {
    "test": true,
    "expect": true,
    "jest": true,
    "beforeEach": true,
    "fetch": true,
    "describe": true,
    "beforeAll": true,
    "afterAll": true
  }
}
