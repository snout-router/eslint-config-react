# Snout ESLint Configuration for React

[![Current version][badge-version-image]][badge-version-link]

[badge-version-image]: https://img.shields.io/npm/v/@snout/eslint-config-react?label=%40snout%2Feslint-config-react&logo=npm&style=for-the-badge
[badge-version-link]: https://npmjs.com/package/@snout/eslint-config-react

## Installation

Install as an NPM and then resolve all the peer dependency issues. Peer
dependencies are necessary because of [an ESLint limitation].

## Usage

Designed for use in conjunction with [@snout-router/eslint-config].

```js
// .eslintrc.js
module.exports = {
  extends: [
    '@snout/react',
  ],
}
```

<!-- References -->

[@snout-router/eslint-config]: https://github.com/snout-router/eslint-config
[an eslint limitation]: https://github.com/eslint/eslint/issues/3458
