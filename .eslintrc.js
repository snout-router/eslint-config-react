require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // don't use run-time prop types, use TypeScript instead
    "react/prop-types": "off",
  },
};
