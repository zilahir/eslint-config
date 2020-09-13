const baseRules = require("./rules/base");
const reactRules = require("./rules/react");
const typescriptRules = require("./rules/typescript");
const typescriptSettings = require("./settings/typescript");
const checkDependencies = require("./utils/checkDependencies");

checkDependencies([
	"eslint-config-airbnb",
	"@typescript-eslint/eslint-plugin",
	"@typescript-eslint/parser",
	"eslint-plugin-unicorn",
	"eslint-plugin-react",
]);

module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"plugin:react/recommended",
		"airbnb",
		"plugin:@typescript-eslint/recommended",
		"plugin:unicorn/recommended"
	],
	rules: {
		...baseRules,
		...reactRules,
		...typescriptRules,
	},
	settings: {
		...typescriptSettings,
		react: {
			version: "detect"
		}
	},
};
