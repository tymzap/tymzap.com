module.exports = {
  extends: ["next", "plugin:prettier/recommended"],
  plugins: ["import"],
  rules: {
    "no-nested-ternary": "error",
    "no-else-return": "error",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: ["function", "return", "if", "switch"],
      },
      {
        blankLine: "always",
        prev: ["if"],
        next: "*",
      },
    ],
    "import/no-duplicates": "error",
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          ["internal"],
          ["parent", "sibling", "index", "object"],
        ],
        "newlines-between": "always",
      },
    ],
  },
};
