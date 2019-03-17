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

	// Import order
	"import/order": [
		"error",
		{
			groups: [
				["builtin", "external"], // Built-in Node modules and external packages first
				// All other imports afterwards
			],
			"newlines-between": "always", // Enforce newlines between and disallow inside groups
		},
	],
	// TODO enforce alphabetical sorting within groups once available
	//   See https://github.com/benmosher/eslint-plugin-import/issues/389
};
