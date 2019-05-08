# Intro To Webpack

**:wave: Welcome to the **Bundling CSS** branch! :wave:**

We can also use [loaders](https://webpack.js.org/loaders) to load things that aren't code. You can load an image, css, csv, xml, etc. In this lesson, we'll be adding support to load css.

## Steps

### 1. :robot: Install the loaders

If we want to use a loader, we need to install it. The way that Webpack loads styles is through a multi-step process that pipes the output from one loader into the input from another. The high-level loader is the `style-loader` and we want our styles to be processed with the `css-loader`.

```bash
npm i -D style-loader css-loader
```

### 2. Break the Rules

To verify that we did things right, we need to first verify that it's not already working.

Create the file `./src/index.css` and add a simple css rule to it, then `import` or `require` it from `./src/index.js`.

Running Webpack now should show us the same "appropriate loader" error that we saw before.

### 3. Setting up the Rules

Similar to the previous lesson, we need to add a rule that has a test, but this test should be specific to `.css` files.

Add a new Rule to your `module.rules` property and set the test to `/\.css$/`.

We want this Rule to `use` both the `style-loader` and the `css-loader`, _but the order matters_. Webpack will pipe the output from the _last_ loader specified into the loader before it until it reaches the first loader. If you were to compare `['a-loader', 'b-loader', 'c-loader']` to functions, it would be like writing `a-loader( b-loader( c-loader() ) )`.

### 4. Setting up CSS modules

So far, we've been using some loader shortcuts, so this is mostly to show you more about configuration of loaders.

Officially, a loader should be an object (or a function that returns an object) that has the following shape:

```javascript
{
  loader: 'some-loader',
  options: {
    someOption: "I'm hungry"
  }
}
```

In our case, we want to give `css-loader` an `options` object so that we can customize how it recognizes (and processes) css. To turn on css modules, we just set `options.modules` to `true` and voila we have locally scoped css rules!

If you don't know how to use css modules, feel free to look it up, but it's irrelevant moving into the next module, as they'll be turned off moving forward.

### 5. Git to the next branch

Make sure that everything is duplicated across configurations and then commit or stash your work and `npm run next`!

## Branch List

| Topic                            | Code Branch | Solution Branch |
| -------------------------------- | ----------- | --------------- |
| No Config                        | 1/code      | 1/solution      |
| Entry & Output                   | 2/code      | 2/solution      |
| Modes & Functional Configs       | 3/code      | 3/solution      |
| Transpiling JS(X)                | 4/code      | 4/solution      |
| **Bundling CSS**                 | **5/code**  | **5/solution**  |
| Dev Server                       | 6/code      | 6/solution      |
| Hot Module Replacement & Plugins | 7/code      | 7/solution      |
| Source Maps                      | 8/code      | 8/solution      |
| Code Splitting                   | 9/code      | 9/solution      |
| Webpack Merge                    | 10/code     | 10/solution     |
