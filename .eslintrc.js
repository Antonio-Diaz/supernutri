module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    camelcase: 'off',
    'no-unused-vars': ['warn'],
  },
}
