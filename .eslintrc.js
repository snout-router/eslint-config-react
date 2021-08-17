module.exports = {
  extends: [
    'standard-jsx',
    'standard-react',
  ],
  rules: {
    // no requirement for parens around multi-line JSX
    'react/jsx-wrap-multilines': 'off',
    // broken with react/jsx-wrap-multilines disabled, until https://github.com/yannickcr/eslint-plugin-react/issues/1466 is addressed
    'react/jsx-closing-tag-location': 'off',
    // no requirement for prop types
    'react/prop-types': 'off',
  },
}
