module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'next',
		'next/core-web-vitals',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', '@typescript-eslint'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		// Solo permite comillas simples y backticks para los strings
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		// No permitir ; al final de cada línea
		semi: ['error', 'never'],
		// Warning si hay console logs en el código
		'no-console': ['warn'],
		'react-hooks/exhaustive-deps': 'off',
		'react/display-name': 'off',
	},
}
