/**
 * Raise an exception if at least one of the specified packages is not installed
 */
function checkDependencies(packageNames) {
	for (let packageName of packageNames) {
		try {
			require(packageName);
		} catch (err) {
			throw Error(`Package ${packageName} is not installed`);
		}
	}
}

module.exports = checkDependencies;
