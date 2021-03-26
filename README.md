# vite-test-example

## E2E Testing

This repository uses Cypress as an example to illustrate how to setup end-to-end tests with Vite.

To try it out, run:

```sh
yarn test:e2e
```

Running end-to-end tests with Vite is no different from other bundlers:

* Bundle the app for production;
* Start a static HTTP server;
* Run the command from the test framework.

Vite provides a built-in static HTTP server to preview the build results. We can start it by running `vite preview` (or `yarn serve`). The default URL of this preview server is `http://localhost:5000/`. So we also set the `baseUrl` option in `cypress.json` to this URL.

`vite preview` serves the `dist` folder's content, which results from the `vite build` command. So we add a `preserve` hook to the `script` section of `package.json` to run this command. Therefore, whenever you run `npm run serve`, `vite build` will be executed first.

## Unit Testing

```sh
yarn test:unit
```

This repository uses [`@web/test-runner`](https://modern-web.dev/docs/test-runner/overview/) and [`vite-web-test-runner-plugin`](https://github.com/betaboon/vite-web-test-runner-plugin/) to execute unit tests.

The test framework is [Mocha](https://mochajs.org/) and the assertion library is [Chai](https://www.chaijs.com/).

## TODOs

* TypeScript example
* CI setup
