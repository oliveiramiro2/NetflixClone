module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'plugin:import/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  plugins: ['react', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js', '.tsx'] },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'react/function-component-definition': [
      'warn',
      { namedComponents: ['arrow-function'] },
    ],
    'import/extensions': [
      'warn',
      'never',
      {
        jsx: 'ignorePackages',
        js: 'ignorePackages',
        tsx: 'ignorePackages',
        ttf: 'ignorePackages',
        png: 'ignorePackages',
        d: 'ignorePackages',
      },
    ],
    'no-use-before-define': [
      'off',
      {
        functions: false,
        classes: false,
        variables: false,
        allowNamedExports: false,
      },
    ],
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'none', ignoreRestSiblings: false },
    ],
    'import/no-unresolved': ['off', { commonjs: false }],
    'no-unused-expressions': ['off', { allowTernary: true }],
    'no-undef': ['off', { typeof: true }],
    camelcase: 'off',
    'react/no-unused-prop-types': ['off', { skipShapeProps: false }],
    'react/destructuring-assignment': [
      'off',
      'ignore',
      { destructureInSignature: 'ignore', ignoreClassFields: false },
    ],
    'no-nested-ternary': 'off',
    'react/require-default-props': ['off'],
    'no-plusplus': 'off',
    'no-useless-escape': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-lone-blocks': 'off',
    'react/no-unstable-nested-components': ['off', { allowAsProps: false }],
    'consistent-return': 'off',
    'react/no-array-index-key': 'off',
    'global-require': 'off',
    'react/style-prop-object': 'off'
  },
};
