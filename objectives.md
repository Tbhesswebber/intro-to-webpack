# Objectives

We will be using webpack to:

- run a build without any configuration
- specify our entry point(s) and output directories
- create separate builds for "development" and "production" modes
- transpile javascript and JSX
- bundle css and take advantage of css-modules
- speed up the development process by watching files and serving them from a development server
- configure source maps for ease of error reporting and logging
- optimize our output through producing multiple bundles

Non-goals:

- add Hot Module Replacement to a React project (branch 7)
- optimize the Webpack configuration by using tools like Webpack Merge (branch 10)
- optimize our production code beyond configuring code-splitting through Webpack (branch 9)
