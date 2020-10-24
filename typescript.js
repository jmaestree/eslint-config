module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      modules: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['./core.js', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
  plugins: ['import', '@typescript-eslint'],
  rules: {
    // Import
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    // TypeScript
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // Other
    radix: 'warn'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', 'src']
      }
    }
  }
};