# Intro To Webpack

**:wave: Welcome to the **Hot Module Replacement** branch! :wave:**

Hot Module Replacement or [HMR](https://webpack.js.org/plugins/hot-module-replacement-plugin/) allows for rapid development by adding, changing, or removing modules while an application runs without triggering a full reload. This is extremely valuable, especially when it takes some significant effort to get your application in the state in which you can verify that something is right.

\_Note: HMR is not always the optimal tool to help you develop rapidly. It can hog lots (and sometimes all) of your system's resources for long durations (45 seconds or more) depending on the size of the files being processed. It also doesn't really play well with optimizations like code-splitting and isn't necessary when you use UAT's that leave your application in an interactive state (check out Cypress).

:warning: Hot Module Replacement should _never_ be used in production. :warning:

## Steps

### 1. Add the Plugin

The HMR plugin is exposed by `webpack`. Import this into your project and add a new instance of the plugin to the plugins array in your [development config](webpack.development.js).

### 2. Set up webpack-dev-server to try a hot replacement over a reload

Webpack Dev-Server has a `hot` option that tells it to attempt the hot replacement over a page reload

Set `devServer.hot` to `true` to turn this feature on.

_Note: There are other ways to configure HMR, but this is the fastest._

### 3. Using HMR with React

1. :robot: Install `react-hot-loader` and `@hot-loader/react-dom` as dependencies (append `@<Your-React-Version-Number> to the latter if you're not using the latest version of React)
1. Add a `plugins` array containing `'react-hot-loader/babel'` to the [babel config](.babelrc)
1. Import `hot` from `react-hot-loader/root` into the entry point for the application
1. Wrap the export of your top-most component in `hot`.
1. Add a `resolve` property to you webpack development configuration and set it to `{alias:{'react-dom': '@hot-loader/react-dom'}}`
1. Run the development build and check the console in the browser for any errors or warning (there should be normal logs saying that HMR is enabled)
1. Make a change in a component and look at the additional logs to ensure no new errors or warnings appear.

### 6. Git to the next branch

Commit or stash your work and `npm run next`!

## Branch List

| Topic                      | Code Branch | Solution Branch |
| -------------------------- | ----------- | --------------- |
| No Config                  | 1/code      | 1/solution      |
| Entry & Output             | 2/code      | 2/solution      |
| Modes & Functional Configs | 3/code      | 3/solution      |
| Transpiling JS(X)          | 4/code      | 4/solution      |
| Bundling CSS               | 5/code      | 5/solution      |
| Dev-Server                 | 6/code      | 6/solution      |
| **Hot Module Replacement** | **7/code**  | **7/solution**  |
| Source Maps                | 8/code      | 8/solution      |
| Code Splitting             | 9/code      | 9/solution      |
| Webpack Merge              | 10/code     | 10/solution     |
