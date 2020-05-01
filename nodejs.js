const baseRules = require("./rules/base");
const nodeRules = require('./rules/nodejs');
const checkDependencies = require("./utils/checkDependencies");

checkDependencies(["eslint-config-airbnb", "eslint-plugin-node"])

module.exports = {
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:node/recommended"
  ],
  rules: {
    ...baseRules,
    ...nodeRules,
  }
}