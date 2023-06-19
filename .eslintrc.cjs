const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"),
);

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["react-app", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": ["error", prettierOptions],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react/jsx-uses-react": ["off"],
    "react/react-in-jsx-scope": ["off"],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      excludedFiles: ["vite.config.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
};
