module.exports = {
	// Do not make accessibility modifiers (public/package/private) mandatory
	"@typescript-eslint/explicit-member-accessibility": "off",

	// TODO Remove the following exceptions once fixed
	"@typescript-eslint/no-var-requires": "off", // Seems to be broken (also marks normal imports)
	"import/named": "off", // Seems to be broken for TypeScript (incorrect "not found" errors)
};
