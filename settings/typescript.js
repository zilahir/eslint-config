const jsExtensions = [".js", ".jsx"];
const tsExtensions = [".ts", ".tsx"];
const allExtensions = jsExtensions.concat(tsExtensions);

// TODO Remove and use eslint-plugin-import's TypeScript configuration once the module supports
//   @typescript-eslint/parser
module.exports = {
	"import/extensions": allExtensions,
	"import/parsers": {
		"@typescript-eslint/parser": tsExtensions,
	},
	"import/resolver": {
		node: {
			extensions: allExtensions,
		},
	},
};
