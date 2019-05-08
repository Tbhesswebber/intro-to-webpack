# Intro To Webpack

:wave: Welcome to the **Mode** branch! :wave:

## Steps

### 1. Run Webpack

Just in case you haven't lately, let's go ahead and run our build.

Looking at the last few lines, we see that there's a warning!

### 2. Using the [Webpack CLI](https://webpack.js.org/api/cli/)

We can configure the mode through the `--mode` flag.

In your terminal, run:

```bash
npm run build -- --mode production
```

The warning is gone! Lets append `--mode production` to our build script.

_You can also try setting the mode to "development" or "none"._

### 3. Setting `mode` in the configuration

Specifying the mode from the CLI allows us to be dynamic, but it isn't really all that clear when you look at the configuration that there are separate environments available to run webpack within.

For now, let's just set the `mode` property to `"none"` in our configuration.

### 4. Functional Webpack Configs

When supplying config information to the CLI, we can change our Webpack configuration to export a function that returns an object rather than just exporting an object.

Change your export to be a function that returns our current config and then run Webpack so we know it works!

### 5. Accepting values from the CLI

The CLI allows you to use the `--env` flag to specify an `env` object that will be passed as an argument to a functional config. In order to pass our mode through the env, we would adjust our `build` script to be:

```bash
webpack --env.mode production
```

In the config, update the function to accept an argument and then log that argument to the console before returning our config object.

Run the build again.

_Don't forget to look above the output from Webpack to see the object!_

### 6. Using the env object

You should have seen an object with a `mode` property whose value is `'production'`. Now we need our configuration to consume this value. Using any means you prefer, remove `'none'` from the `mode` property and assign the value from the argument.

_Note: It's typically a best bet to set the mode to default to `production` within your config somehow just to act as a safety net._

### 7. Reflect

This isn't really a Webpack configuration step, but this is a good point in time to think about how different your development environment is going to be from your production one.

For small, personal projects, you may have a few items that you want to add for one environment or the other, but your config will generally have significant overlap. For this, you can write some helper functions that will allow you to conditionally apply those values based on the mode.

We're going to go a step further.

### 8. Splitting up development and production

The most simplistic way to manage the two environments is to have two completely different configurations.

1. Make a `webpack.production.js` and `webpack.development.js` in the root directory and copy the existing code from `webpack.config.js` into them.

1. Clear out the return statement of the configuration function and replace it with a dynamic `require` to access either file based on the mode.

_Note: There is an easier way to manage any overlap between the two configurations, but we'll get into that down the line._

### 9. Git to the next branch

Commit your work and `npm run next`!

## Branch List

| Topic                            | Code Branch | Solution Branch |
| -------------------------------- | ----------- | --------------- |
| No Config                        | 1/code      | 1/solution      |
| Entry & Output                   | 2/code      | 2/solution      |
| **Modes & Functional Configs**   | **3/code**  | **3/solution**  |
| Transpiling JS(X)                | 3/code      | 3/solution      |
| Bundling CSS                     | 4/code      | 4/solution      |
| Dev Server                       | 5/code      | 5/solution      |
| Hot Module Replacement & Plugins | 6/code      | 6/solution      |
| Source Maps                      | 7/code      | 7/solution      |
| Code Splitting                   | 8/code      | 8/solution      |
| Webpack Merge                    | 9/code      | 9/solution      |
