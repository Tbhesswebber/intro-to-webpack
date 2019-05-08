# Intro To Webpack

**:wave: Welcome to the **Transpilation** branch! :wave:**

Using Webpack with the currently supported syntax in JavaScript is great, but we often want to do more. In this lesson, we'll add in some unsupported syntax and use `Babel` to transpile it to supported syntax!

## Steps

### 1. Add the React basics

We've already installed React, React-DOM and Babel for you (and configured Babel), but we need to add some code. Create a simple React "Hello, World" component and render it using React-DOM.

When you've completed this, run your Webpack build.

_:warning: Make sure that you are using the entrypoint from the Webpack config as your entrypoint for the React app!_

### 2. Evaluate the error

Our build (hopefully) failed. If you read the error, it asks you to use "an appropriate loader to handle this file type."

What? But we know that it supports JS already...

Out of the box, Webapck supports `.js` and `.json` file extensions. In order to support other file types, we need to use [loaders](https://webpack.js.org/loaders). The error that we're getting isn't actually from the file _type_ but the file's contents - it doesn't know what JSX is! (If you don't believe me, change your JSX to use raw `React.createElement` calls)

### 3. Transpiling

In the root directory, there is a `[.babelrc.json](babelrc.json)`. In order to have Webpack use this for transpilation, we need to install :robot: `babel-loader` as a dev-dependency (`--save-dev` or `-D`)and tell Webpack to use it.

Once it's installed, we need to add a `module` property to our [config](webpack.production.js) and set it to an object. In this object, we want to create some file-loading rules in the `module.rules` property, which is an array of [Rules](https://webpack.js.org/configuration/module/#modulerules).

Each rule needs to follow the pattern: `{test: Condition, use: [loader]}` (they get a bit more complex than that, but those are the basics).

The `babel-loader` needs a straight-forward rule. In this case, our condition will just be a regular expression that validates `.js` and `.jsx` files: `/\.jsx?$/`. When that match returns true, we want to use `babel-loader` for our loader, so we need to set that string in the Rule's `use` array.

Run your build now.

_:warning: We want this to happen in both "development" and "production", so remember to duplicate your logic in both configs._

### 4. Git to the next branch

We won't add any other loaders just yet, so commit your work and `npm run next`!

## Branch List

| Topic                            | Code Branch | Solution Branch |
| -------------------------------- | ----------- | --------------- |
| No Config                        | 1/code      | 1/solution      |
| Entry & Output                   | 2/code      | 2/solution      |
| Modes & Functional Configs       | 3/code      | 3/solution      |
| **Transpiling JS(X)**            | **4/code**  | **4/solution**  |
| Bundling CSS                     | 5/code      | 5/solution      |
| Dev Server                       | 6/code      | 6/solution      |
| Hot Module Replacement & Plugins | 7/code      | 7/solution      |
| Source Maps                      | 8/code      | 8/solution      |
| Code Splitting                   | 9/code      | 9/solution      |
| Webpack Merge                    | 10/code     | 10/solution     |
