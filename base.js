const baseRules = require("./rules/base");
const checkDependencies = require("./utils/checkDependencies");

checkDependencies(["eslint-config-airbnb-base"]);

module.exports = {
	extends: ["airbnb-base"],
	rules: {
		...baseRules,
	},
};
