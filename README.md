# Intro To Webpack

:wave: Welcome to the No Configuration branch! :wave:

## Zero Config Steps

### 1. :robot: Install Webpack

In order to use Webpack, we need both the library itself and its CLI, which are packaged separately.

In your terminal, run the following command:

```sh
npm install -D webpack webpack-cli
# -D is the equivalent of --save-dev
```

### 2. Add a build script

You can access the webpack executable directly through `node_modules/.bin/webpack`, but that's a lot to type. Let's _add_ a script to [package.json](package.json).

:warning: Do _not_ overwrite the scripts that are already present!

```json
{
  "scripts": {
    "build": "webpack"
  }
}
```

### 3. Run webpack

Now that we have a script set up, we just need to run a that script.

Open your terminal and use the following command:

```sh
npm run build
```

### 4. Read the error :fire:

This error gives us a lot of information, but the part that we care about is at the end just before npm reports the exit code.

> ERROR in Entry module not found: Error: Can't resolve './src' in [directory].

### 5. Create a source directory :fire_engine:

The above error is just telling us that Webpack is looking for a directory named "src" in our root directory. Using any method you'd like, create a directory with "src" as its name and add an `index.js` file to it.

i.e. - We need to create `./src/index.js`. Feel free to try changing the name away from index and running the build script again if you want...

### 6. Explore the results

If you look back at your root directory, you'll see that we suddenly have a `./dist/main.js` file. That file is our "[bundle](dist/main.js)".

If you look at the code, it's a bunch of gibberish. That's because Webpack runs in production mode by default (that's the warning that you saw when you ran the build) and so all of the code has been minified for us!

We'll explore these results a bit more in the next lesson because setting the mode is officially adding in configuration!

### 8. Update git

Our dist directory should only ever contain machine-generated code, so we want to add it to our [.gitignore](.gitignore).

```shell
echo "dist/" >> .gitignore
```

### 7. Move on to the next lesson! :tada:

`npm run next`

## Branch List

| Topic                            | Code Branch | Solution Branch |
| -------------------------------- | ----------- | --------------- |
| **No Config**                    | **1/code**  | **1/solution**  |
| Entry & Output                   | 2/code      | 2/solution      |
| Modes & Functional Configs       | 3/code      | 3/solution      |
| Transpiling JS(X)                | 4/code      | 4/solution      |
| Bundling CSS                     | 5/code      | 5/solution      |
| Dev Server                       | 6/code      | 6/solution      |
| Hot Module Replacement & Plugins | 7/code      | 7/solution      |
| Source Maps                      | 8/code      | 8/solution      |
| Code Splitting                   | 9/code      | 9/solution      |
| Webpack Merge                    | 10/code     | 10/solution     |
