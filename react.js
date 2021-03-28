const baseRules = require("./rules/base");
const reactRules = require("./rules/react");

const extendablePlugigns = [
	"plugin:jsdoc/recommended",
	"plugin:jsx-a11y/recommended",
	"plugin:unicorn/recommended",
	"plugin:react-hooks/recommended"
]

const plugins = ["eslint-plugin-import", "react-hooks"]

module.exports = {
	extends: [
		"airbnb",
		"prettier",
		"prettier/react",
		...extendablePlugigns,
	],
	plugins,
	rules: {
		...baseRules,
		...reactRules,
	},
};
