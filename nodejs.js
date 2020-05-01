const baseRules = require("./rules/base");
const nodeRules = require('./rules/nodejs');
const checkDependencies = require("./utils/checkDependencies");

checkDependencies(["eslint-plugin-node", "eslint-plugin-import"])

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:node/recommended"
  ],
  rules: {
    ...baseRules,
    ...nodeRules,
  }
}