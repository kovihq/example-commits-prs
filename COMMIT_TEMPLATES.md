# Commit Messages Templates

## Features

### Example 1 - Short Text

```
feat: allowed drivers to emit a new 'boleto' thought the drivers painel
```

### Example 2 - Short Text Scoped

```
feat(lang): added spanish translation to the rental frontend on the maintaince domain
```

### Example 3 - Long Text
```
feat: added drivers change the document through the drivers platform

It's now possible for the driver to change their upload documento on the drivers platform, by uploading again the document on the drivers platform.
```

### Example 4 - Long Text Scoped
```
feat(billing): added change of credit card payment method

It's now possible to chose the credit card acquire to be chosen on the Kovi admin panel to be selected by region, country or fleet
```

## Breaking Changes

### Example 1 - Short text

```
refactor: updated the moment.js library to the latest version
```

### Example 2 - Long Text Explanatory

```
refactor!: drop support for Node 8

BREAKING CHANGE: Removed the support for the Node 8 in the environment

It was needed to remove the support for two main reasons:

  - The libraries that we were using were in high venerability in this version of Node and needed to be updated
  - Node 8 lost support for the LTS
```

## Fixes or HotFix

### Example 1 - Short text

```
fix: correct the graphql type in the schema
```

### Example 2 - Long Text Explanatory

```
fix: correct the Vue lifecycle hook that was called as synchronous

Fixed the Vue lifecycle hook that was called as synchronous when needed to be called as asynchronous.

Ref #123 || ClubHouse Link
```
