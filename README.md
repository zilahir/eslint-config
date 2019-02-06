# eslint-config

This is my personal configuration for [ESLint](https://github.com/eslint/eslint). It's based on [Airbnb's ESLint configurations](https://github.com/airbnb/javascript).

## Base configuration

1. Install the required packages:

```sh
npx install-peerdeps --dev eslint-config-airbnb-base
yarn add --dev --tilde @samuelmeuli/eslint-config
```

2. Create a `.eslintrc.yml` file with the following content in your project root:

```yml
root: true

extends:
  - airbnb-base
  - "@samuelmeuli/eslint-config"

env:
  browser: true
```

3. Add a linting script to your `package.json` file:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

## React configuration

1. Install the required packages:

```sh
npx install-peerdeps --dev eslint-config-airbnb
yarn add --dev --tilde @samuelmeuli/eslint-config
```

2. Create a `.eslintrc.yml` file with the following content in your project root:

```yml
root: true

extends:
  - airbnb
  - "@samuelmeuli/eslint-config/react"

env:
  browser: true
```

3. Add a linting script to your `package.json` file:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```
