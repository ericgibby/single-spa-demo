# single-spa-demo

Sample micro-frontend application built with [_single-spa_](https://single-spa.js.org/).

## Getting started

This repo contains multiple projects bootstrapped with [_create-single-spa_](https://single-spa.js.org/docs/create-single-spa/).
It uses Yarn Workspaces for convenience, which allows for consolidation of common dependencies and as well as some top-level scripts.

### Installing dependencies

From the root directory, run:

```sh
yarn install
```

### Running the application locally

From the root directory, run:

```sh
yarn start
```

This will start up 3 separate applications running _webpack-dev-server_ on different ports:
-	**single-spa-root**: The main entry point for the application.
-	**single-spa-react-app**: A simple react application that is boostrapped inside **single-spa-root** at the default path (`/`).
-	**single-spa-react-app-plus**: Another simple react application that is bootstrapped inside **single-spa-root** at the `/plus` path.

Open your browser and navigate to [http://localhost:9000](http://localhost:9000) to view the application.
