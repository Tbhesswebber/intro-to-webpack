# Intro To Webpack

**:wave: Welcome to the **Source Maps** branch! :wave:**

In some cases, it is more desirable to know precisely where logs and errors occurred than to have modules update magically. This is especially true if you have large modules/components or practice TDD in such a way that you are automating your testing and can interact with your page in it's final state. In the first instance, you can have your CPU operating at 100% for long durations and in the second instance, the time savings aren't worth the need to hunt down where exactly an error occurred. This is where [Source Maps](https://webpack.js.org/configuration/devtool) come in.

_Note: For this lesson, we have stripped out all of the configuration from the HMR lesson, but left everything else the same._

## Steps

### 1. Configuring Source Maps

The webpack configuration allows for you to specify a `devtool` property. Add this to your development configuration and set it to `"cheap-module-eval-source-maps"`.

If you want to test out different kinds of source maps, see the link posted above.

### 2. File Names

If you run the build now, the filenames aren't really all that clear. We can change this using the `output.devtoolModuleFilenameTemplate` property. Set this to the string `"[absolute-resource-path]"`.

For a full reference on templating names, checkout the [documentation](https://webpack.js.org/configuration/output#outputdevtoolmodulefilenametemplate) for this property.

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
| **Source Maps**            | **8/code**  | **8/solution**  |
| Code Splitting             | 9/code      | 9/solution      |
| Webpack Merge              | 10/code     | 10/solution     |
