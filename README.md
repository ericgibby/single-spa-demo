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

### Environment configuration

The application uses GitHub OAuth for authentication.
You can create a GitHub OAuth application by going to the [**Developer Settings** page on GitHub](https://github.com/settings/developers),
then click **OAuth Apps** -> **New OAuth App**.
Set the **Hompage URL** to `http://localhost:9000` and the **Authorization callback URL** to `http://localhost:9000/single-spa-demo/auth/callback`.

For authentication to work, some of the applications require the _Client ID_ and _Client Secret_ for your GitHub OAuth app.
This configuration can be defined in `.env` or `.env.local` files.

In `<projectRoot>/auth-app`, create a `.env.local` file with the following content:

```
OAUTH_CLIENT_ID=<YOUR_OAUTH_CLIENT_ID>
```

In `<projectRoot>/gatekeeper`, create a `.env.local` file with the following content:

```
OAUTH_CLIENT_ID=<YOUR_OAUTH_CLIENT_ID>
OAUTH_CLIENT_SECRET=<YOUR_OAUTH_CLIENT_SECRET>
```

### Running the application locally

From the root directory, run:

```sh
yarn start
```

This will start up 6 separate applications running _webpack-dev-server_ on different ports:

-   **single-spa-root**: The main entry point for the application.
-   **app-header**: A React application that is bootstrapped as the header inside **single-spa-root**.
-   **auth-app**: A React application for handling the OAuth flow with GitHub, bootstrapped inside **single-spa-root** at the `/auth` path.
-   **single-spa-react-app**: A simple React application that is bootstrapped inside **single-spa-root** at the default path (`/`).
-   **single-spa-react-app-plus**: Another simple React application that is bootstrapped inside **single-spa-root** at the `/plus` path.
-   **single-spa-angular-app**: A simple Angular application that is bootstrapped inside **single-spa-root** at the `/ng` path.

Additionally, it will start up two other processes:

-   An instance of _live-server_ that serves the UMD version of the **shared-components** library.
-   **gatekeeper**: A Node/Express app that works as a proxy for the code exchange portion of the GitHub Authorization Code flow.

Open your browser and navigate to [http://localhost:9000](http://localhost:9000) to view the application.
