module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"standard",
		"eslint-config-prettier",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/no-unescaped-entities": 0,
		"react/prop-types": [2, { ignore: ["children", "Component", "pageProps"] }],
	},
};
