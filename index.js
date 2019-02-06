const baseRules = require("./baseRules");
const { checkBaseConfig } = require("./checkDependencies");

if (!checkBaseConfig()) {
	throw Error('Package "eslint-config-airbnb-base" is not installed');
}

// Extends eslint-config-airbnb-base
module.exports = {
	rules: baseRules,
};
