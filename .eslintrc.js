/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  env: {
    es2021: true,
    node: true,
  },
  globals: {
    document: "readonly",
    navigator: "readonly",
    window: "readonly",
  },
  extends: [require.resolve("./")],
  overrides: [
    {
      files: ["**/*.ts"],
      extends: ["plugin:@typescript-eslint/base"],
    },
  ],
};
