module.exports = {
  extends: [
    "next",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["import"],
  ignorePatterns: ["!.storybook"],
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
