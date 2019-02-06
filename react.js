const baseRules = require("./baseRules");
const { checkReactConfig } = require("./checkDependencies");

if (!checkReactConfig()) {
	throw Error('Package "eslint-config-airbnb" is not installed');
}

// Rules to disable from eslint-config-airbnb
const disabledReactRules = {
	// Allow named export in files with a single export
	"import/prefer-default-export": "off",

	// Require React files to have ".js" extension
	"react/jsx-filename-extension": [
		"error",
		{
			extensions: [".js"],
		},
	],

	// Tab indentation
	"react/jsx-indent": ["error", "tab"],
	"react/jsx-indent-props": ["error", "tab"],
	"react/jsx-one-expression-per-line": "off",
};

// Additional React rules
const additionalReactRules = {
	// Require <button> to have "type" attribute (prevents unintended form submissions)
	"react/button-has-type": "error",
};

// Extends eslint-config-airbnb
module.exports = {
	rules: {
		...baseRules,
		...disabledReactRules,
		...additionalReactRules,
	},
};
