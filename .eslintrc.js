module.exports = {
  extends: 'erb',
  plugins: ['@typescript-eslint'],
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-import-module-exports': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'one-var': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-unreachable-loop': 'off',
    'guard-for-in': 'off',
    'no-else-return': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'react/function-component-definition': [
      '<enabled>',
      {
        namedComponents:
          'function-declaration' |
          'function-expression' |
          'arrow-function' |
          ['function-declaration', 'function-expression', 'arrow-function'],
        unnamedComponents:
          'function-expression' |
          'arrow-function' |
          ['function-expression', 'arrow-function'],
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),
      },
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
