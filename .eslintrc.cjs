module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'jsdoc'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'jsdoc/no-undefined-types': 1,
    'react/prop-types': 'off',
    'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
  },
  settings: {
		react: {
			version: 'detect',
		},
	},
};
