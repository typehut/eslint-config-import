# @typehut/eslint-config-import [![CI][ci-image]][ci-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[ci-image]: https://github.com/typehut/eslint-config-import/actions/workflows/ci.yml/badge.svg?branch=main
[ci-url]: https://github.com/typehut/eslint-config-import/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@typehut/eslint-config-import.svg
[npm-url]: https://npmjs.org/package/@typehut/eslint-config-import
[downloads-image]: https://img.shields.io/npm/dm/@typehut/eslint-config-import.svg
[downloads-url]: https://npmjs.org/package/@typehut/eslint-config-import

## Install

```shell
npm i -D @typehut/eslint-config-import
```

or

```shell
yarn add -D @typehut/eslint-config-import
```

## Usage

```json
{
  "extends": ["@typehut/eslint-config-import"]
}
```

Note that you cannot omit the `eslint-config-` prefix to extend.

## Group Order

1. Side effect (Can't auto-sorting within this group)
2. Node.js built-in
3. External
4. Unknown
5. Internal (Prefixed with `@/` or `~/` are treated as internal group and are placed before relative paths)
6. Type
7. Style
