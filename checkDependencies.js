/**
 * Test whether the package "eslint-config-airbnb-base" (base ESLint config) is installed
 * @returns {boolean}
 */
function checkBaseConfig() {
	try {
		require("eslint-config-airbnb-base");
		return true;
	} catch (err) {
		return false;
	}
}

/**
 * Test whether the package "eslint-config-airbnb" (React ESLint config) is installed
 * @returns {boolean}
 */
function checkReactConfig() {
	try {
		require("eslint-config-airbnb");
		return true;
	} catch (err) {
		return false;
	}
}

module.exports = {
	checkBaseConfig,
	checkReactConfig,
};
