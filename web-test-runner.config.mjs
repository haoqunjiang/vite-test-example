import vite from 'vite-web-test-runner-plugin'

export default {
  plugins: [
    vite(),
  ],
  coverageConfig: {
    // only include necessary files to avoid problems and save time
    include: [
      'src/**/*.{vue,js,jsx,ts,tsx}'
    ]
  },
  testRunnerHtml: testFramework => `
    <html>
      <head>
        <script>
          // Note: if using '@testing-library/vue' instead of '@vue/test-utils', these globals are required
          global = globalThis;
          process = { env: {} };
        </script>
        <script type="module" src="${testFramework}"></script>
      </head>
    </html>
  `,
};
