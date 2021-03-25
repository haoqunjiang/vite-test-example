# vite-test-example

## E2E Test

This repository uses Cypress as an example to illustrate how to setup E2E tests with Vite.

To run the tess:

```sh
yarn test:e2e
```

Running End-to-End test with Vite is no different to other bundlers: bundle the app for production, start a static http server, and then run the command from the test framework.

Vite provides a built-in static http server to preview the build results. It can be started by running `vite preview` (`yarn serve` if you are using the default template). The default URL of the preview server is `http://localhost:5000/`. So we also set the `baseUrl` option in `cypress.json` to this URL.

`vite preview` serves the content of the `dist` folder, which is the result of the `vite build` command. So we add a `preserve` hook in the `script` section of `package.json`, which runs this build command. Therefore, whenever you run `npm run serve`, `vite build` will be executed first.
