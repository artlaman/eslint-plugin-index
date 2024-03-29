# :point_up: eslint-plugin-index

[![License: MIT](https://img.shields.io/badge/license-MIT-orange.svg)](https://github.com/artlaman/eslint-plugin-index/blob/master/LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

ESlint rules to ensure the proper usage of index.js files

## Supported rules

| rule                                             | description                                            | recommended |
| ------------------------------------------------ | ------------------------------------------------------ | ----------- |
| [`index/only-import-export`][only-import-export] | Allow only import and export statements in index files | error       |
| [`index/forbid`][forbid]                         | Forbid files named `index`                             | off         |

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
    "index/only-import-export": "error"
    "index/forbid": "off"
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

[only-import-export]: rules/only-import-export/only-import-export.md
[forbid]: rules/forbid/forbid.md
