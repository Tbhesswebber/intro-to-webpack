# Intro To Webpack

:wave: Welcome to the Entry & Output branch! :wave:

## Steps

### 1. Make a configuration file

Webpack automatically looks for a `webpack.config.js` file in the root of your project. Go ahead and add one now and export an empty object by default using the CommonJS module pattern (i.e. `module.exports`).

### 2. Specify the context

Context merely tells Webpack where to look for the base directory to use for your entry and output. This defaults to the current working directory, but I like to set it anyway just to be explicit.

Add a `context` property to your configuration and set it to the current working directory.

### 3. Specify the entry point

You need one entry point for each _HTML_ page that you serve. The entry point can be:

- an array for a multi-page applications
- a string for single-page applications

Add an `entry` property to your configuration and set it to `"./src/index.js"`, which also happens to be the default.

### 4. Specify the output

Webpack can get quite complex when you get to [output](https://webpack.js.org/configuration/output) and requires an object with a lot of optional properties.

For this step, we're just going to specify the `output.path` property and assign it to the full path of the current working directory with `/dist` appended to it.

If you run the build now, Webpack will generate `./dist/main.js`. I don't like that name, so let's set the `output.filename` to `"main.bundle.js"`.

### 5. Clean the `dist` directory

If you notice, changes that we make are reflected in the build, but we still have the old files. In order to keep the `dist` directory from becoming bloated , we can either delete our `dist` folder manually or use the [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin) to do it for us on each build.

I'm ~~lazy~~ efficient, so lets go ahead and install it. :robot:

```bash
npm i -D clean-webpack-plugin
```

And to set it up:

- import it (:warning:_remember to use CommonJS!_)
- add a `plugins` property to your configuration and set it to an empty array (we'll talk about plugins more in a few more steps)
- add a new instance of the plugin to the array

### Git to the next branch

Commit your work and `npm run next`!

## Branch List

| Topic                            | Code Branch | Solution Branch |
| -------------------------------- | ----------- | --------------- |
| No Config                        | 1/code      | 1/solution      |
| **Entry & Output**               | **2/code**  | **2/solution**  |
| Modes & Functional Configs       | 3/code      | 3/solution      |
| Transpiling JS(X)                | 3/code      | 3/solution      |
| Bundling CSS                     | 4/code      | 4/solution      |
| Dev Server                       | 5/code      | 5/solution      |
| Hot Module Replacement & Plugins | 6/code      | 6/solution      |
| Source Maps                      | 7/code      | 7/solution      |
| Code Splitting                   | 8/code      | 8/solution      |
| Webpack Merge                    | 9/code      | 9/solution      |
