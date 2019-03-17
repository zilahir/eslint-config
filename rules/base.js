module.exports = {
	// Tab indentation
	indent: ["error", "tab"],
	"no-tabs": "off",

	// Object spacing
	"object-curly-newline": "off",
	"object-curly-spacing": [
		"error",
		"always",
		{
			objectsInObjects: false,
		},
	],

	// Disallow console statements (except for console.error)
	"no-console": [
		"error",
		{
			allow: ["error"],
		},
	],
};
