# eslint-config

These are my personal configurations for [ESLint](https://github.com/eslint/eslint). They are based on [Airbnb's ESLint configurations](https://github.com/airbnb/javascript).

## Base configuration

1. Install the required packages:

```sh
npx install-peerdeps --dev eslint-config-airbnb-base
npm i --save--dev @zilahir/eslint-config

# If you are using TypeScript, also run the following:
npm  i --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

2. Create a `.eslintrc.yml` file with the following content in your project root:

```yml
root: true

extends:
  - "@zilahir/eslint-config/base"
  # OR
  - "@zialhir/eslint-config/base-typescript"

env:
  browser: true
```

3. Add a linting script to your `package.json` file:

```js
{
  "scripts": {
    "lint:js": "eslint --fix .",
    // OR
    "lint:ts": "eslint --ext .ts --fix ."
  }
}
```

## React configuration

1. Install the required packages:

```sh
npx install-peerdeps --dev eslint-config-airbnb
yarn add --dev --tilde @samuelmeuli/eslint-config

# If you are using TypeScript, also run the following:
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

2. Create a `.eslintrc.yml` file with the following content in your project root:

```yml
root: true

extends:
  - "@samuelmeuli/eslint-config/react"
  # OR
  - "@samuelmeuli/eslint-config/react-typescript"

env:
  browser: true
  node: true
```

3. Add a linting script to your `package.json` file:

```js
{
  "scripts": {
    "lint:js": "eslint --ext .js,.jsx --fix .",
    // OR
    "lint:ts": "eslint --ext .ts,.tsx --fix ."
  }
}
```
