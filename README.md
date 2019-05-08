# Intro To Webpack

**:wave: Welcome to the **Code Splitting** branch! :wave:**

Webpack allows you to break the source tree into multiple bundles by splitting the code with dynamic imports. The dynamic import syntax returns a promise within the language and webpack uses that as an implicit request for a bundle, first checking the cache and then firing off a request. This makes applications load faster, which makes a surprisingly big difference when it comes to a user sticking around (ask a local UX person).

If you are at the point of considering optimizations, this is a great place to start. I would suggest continuing with this [guide from Webpack](https://webpack.js.org/guides/code-splitting)

## Steps

### 1. Add Dynamic Import Syntax

Luckily, we already have Babel installed and partially configured.

1. :robot: Install `@babel/plugin-syntax-dynamic-import` as a dev dependency
1. In your [babel config](.babelrc), add `"@babel/syntax-dynamic-import"` to the `plugins` array.

### 2. Dynamically Import a Component

Change `./src/App.js` so that it is a class that renders a button.

When that button is clicked, we want to render a component from another file inside of our App.

If you get stuck, feel free to `nr next src/App.js`.

:warning: We are not going to get to the point of a working UI. We just need the dynamic import to demonstrate code-splitting if you want to implement this in your product, checkout the [React.Lazy](https://reactjs.org/docs/code-splitting.html#reactlazy) documentation.

### 3. Inspect the Dist & Configure the Filename

Running the production build will allow us to see the file output.

If you have set this up correctly, we should see `./dist/0.main.bundle.js` and `./dist/main.bundle.js`. That's not a very helpful naming method.

We can update our configuration to generate named chunks by setting `output.chunkFilename` to `"[name].bundle.js"`.

In the code, we can use what Webpack calls "Magic Comments" to assign a name with the following syntax:

```javascript
const SomeComponent = () => {
  return import(/* webpackChunkName: "Vijay" */ './SomeComponent.js');
};
```

_Note: If you want to explore other naming methods, refer to [this part of the documentation](https://webpack.js.org/configuration/output/#outputchunkfilename)_

### 3. Git to the next branch

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
| Hot Module Replacement     | 7/code      | 7/solution      |
| Source Maps                | 8/code      | 8/solution      |
| **Code Splitting**         | **9/code**  | **9/solution**  |
| Webpack Merge              | 10/code     | 10/solution     |
