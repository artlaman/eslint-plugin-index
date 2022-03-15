# :point_up: eslint-plugin-index

[![License: MIT](https://img.shields.io/badge/license-MIT-orange.svg)](https://github.com/artlaman/chalice-color-theme/blob/master/LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

ESlint rules to ensure the proper usage of index.js files

## Supported rules

| rule                     | description                | recommended |
| ------------------------ | -------------------------- | ----------- |
| [`index/forbid`][forbid] | Forbid files named `index` | error       |

## Installation and usage

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i -D eslint
```

Next, install `eslint-plugin-index`:

```sh
npm i -D eslint-plugin-index
```

Add `index` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["index"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "plugins": ["index"],
  "rules": {
    "index/forbid": "error"
  }
}
```

Or start with the recommended rule set:

```json
{
  "plugins": ["index"],
  "extends": ["plugin:index/recommended"]
}
```

[forbid]: rules/forbid/forbid.md
