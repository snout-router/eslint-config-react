require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "@snout",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
