const disableImportOrderRule = {};

try {
  require.resolve("eslint-plugin-import");
  disableImportOrderRule["import/order"] = "off";
} catch (_) {}

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ["simple-import-sort"],
  rules: {
    ...disableImportOrderRule,
    "sort-imports": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect
          ["^\\u0000"],
          // Node.js built-in
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
          ],
          // External
          ["^@?\\w"],
          // Unknown
          ["^"],
          // Internal
          ["^[@~]\\/", "^\\.\\.", "^\\.$", "^\\.\\/[^/\\u0000]*$", "^\\."],
          // Type
          [
            "^@?\\w.*\\u0000$",
            "^[@~]\\/.*\\u0000$",
            "^[^.].*\\u0000$",
            "^\\.\\..*\\u0000$",
            "^\\.\\u0000$",
            "^\\.\\/[^/]*\\u0000$",
            "^\\..*\\u0000$",
          ],
          // Style
          ["^.+\\.(css|s[ac]ss|less|styl)$"],
        ],
      },
    ],
  },
};
