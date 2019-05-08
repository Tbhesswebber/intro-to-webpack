# Intro To Webpack

**:wave: Welcome to the **Dev-Server** branch! :wave:**

[Webpack Dev-Server](https://webpack.js.org/configuration/dev-server/#root) allows for rapid development by watching for changes (saves) in files and serving the new bundle through a built-in Express server with each change. We could use `watch` instead, but this allows for a bit more customization and fine-grain control.

## Steps

### 1. :robot: Install Webpack Dev Server

In order to use it, we have to add it.

```sh
npm install webpack-dev-server
```

### 2. Configure the dev-server

There are a few important options to understand:

- `publicPath`: webpack-dev-server serves everything from memory as if they were real files stored at the root path, this allows you to tell it "where" to serve from if your files are expecting to find it somewhere else.
- `contentBase`: this defaults to the `publicPath`, but it allows you to specify "where" to serve from. It's only necessary if you need to serve static content not managed by webpack
- `port`: the port to use for the dev-server
- `proxy`: allows you to interact with an API back-end as if you were on the same origin
- `watchContentBase`: if you are making adjustments to files not processed by webpack, you can still watch them

In this demo, we will just set the port, but these are the options that I find to be the most sought-out for legacy products. If things aren't working for your use-case, it is definitely worthwhile to look through the options on the documentation.

Add a `devServer` property only to your [development config](webpack.development.js) and set it to an object with a `port` property set to your favorite valid port.

Run `npm run build` from your terminal.

### 3. Reflect

This, again, is not a part of the configuration process, but still an imprortant step.

Our build ran and then exited. Why?

Well, we need to tell our development build to run, not our production build.

If we manually invoke `node_modules/.bin/webpack --env.mode development`, we still aren't seeing the expected behavior. The process exited. Why?

Webpack has been broken down into a couple of parts, we have the cli, the standard webpack, and the webpack-dev-server. If you want the dev-server to run, we have to change our command. Run `node_modules/.bin/webpack-dev-server --env.mode development` and notice that the process doesn't exit.

To test everything out, change something within a file that webpack is watching and make sure that the code recompiles.

### 4. Add a script

We could manually invoke the above command, but that's not a valuable use of time. Add a `build:dev` script to your [package.json](package.json) and set it to `webpack-dev-server --env.mode development`.

Since we are currently working on our webpack configuration, you'll have to remember to manually exit the process and restart to process any configuration changes.

### 5. Serve HTML

If you run the new script and pass `-- --open` to it, it will open whatever is being served in your default browser. Currently, it will just serve up your root directory, which is not what we want. Let's make it create and serve an html file that loads our bundle. If you have the script running, exit the process (`ctrl + c`).

1. :robot: Install [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin) with `npm i -D html-webpack-plugin`
1. Import the plugin into the config using CommonJS and add a new instance to your `plugins` array
1. Add `./src/index.template.html` and populate it with the basic requirements of an html document as well as what you need for your React to render.
1. In the config, pass `{template: 'src/index.template.html'}` as an argument to the plugin
1. Run the script again and see your application in all its glory!
1. Add the same to the [production configuration](webpack.production.js)

### 6. Git to the next branch

Commit or stash your work and `npm run next`!

## Branch List

| Topic                            | Code Branch | Solution Branch |
| -------------------------------- | ----------- | --------------- |
| No Config                        | 1/code      | 1/solution      |
| Entry & Output                   | 2/code      | 2/solution      |
| Modes & Functional Configs       | 3/code      | 3/solution      |
| Transpiling JS(X)                | 4/code      | 4/solution      |
| Bundling CSS                     | 5/code      | 5/solution      |
| **Dev-Server**                   | **6/code**  | **6/solution**  |
| Hot Module Replacement & Plugins | 7/code      | 7/solution      |
| Source Maps                      | 8/code      | 8/solution      |
| Code Splitting                   | 9/code      | 9/solution      |
| Webpack Merge                    | 10/code     | 10/solution     |
