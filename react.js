const baseRules = require("./rules/base");
const reactRules = require("./rules/react");
const checkDependencies = require("./utils/checkDependencies");

checkDependencies([
	"eslint-config-airbnb",
	"eslint-plugin-jsdoc",
	"eslint-plugin-jsx-a11y"
]);

module.exports = {
	extends: [
		"airbnb",
		"plugin:jsdoc/recommended",
		"plugin:jsx-a11y/recommended"
	],
	rules: {
		...baseRules,
		...reactRules,
	},
};
