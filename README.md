# What is webpack?

Webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules.

> Running webpack without any configuration will search for `src` folder as module and inside that it will seach any of `src/index<.js, .json, .wasm>` files by default.

#### Asset Modules types:

- `asset/resource` emits a separate file and exports the URL. Previously achievable by using file-loader.
- `asset/inline` exports a data URI of the asset. Previously achievable by using url-loader.
- `asset/source` exports the source code of the asset. Previously achievable by using raw-loader.
- `asset` automatically chooses between exporting a data URI and emitting a separate file. Previously achievable by using url-loader with asset size limit.

#### Public Path

The publicPath configuration option can be quite useful in a variety of scenarios. It allows you to specify the base path for all the assets within your application.

#### Plugins

While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

They also serve the purpose of doing anything else that a loader cannot do. Webpack provides many such plugins out of the box.

#### Mode

Providing the `mode` configuration option tells webpack to use its built-in optimizations accordingly.

`string = 'production': 'none' | 'development' | 'production'`

#### Entry Points

There are multiple ways to define the entry property in your webpack configuration. We will show you the ways you can configure the entry property.

> For single page app it can be used like

```
module.exports = {
  entry: './path/to/my/entry/file.js',
};
```

> For multiple page app it can be used like.

```
module.exports = {
  entry: {
    app: './src/app.js',
    adminApp: './src/adminApp.js',
  },
};

**NOTE: The property name (app, adminApp) of page should be used to name chunk in `HtmlWebpackPlugin`.**

new HtmlWebpackPlugin({
  title: 'My Page',
  filename: 'index.html',
  template: './public/tempalte.html',
  chunks: ['app'], // The chunk name should be same as of the page name from the entry object above.
}),

```

#### Optimization

We use to split the shared libraries into seperate bundle and reference into files it is getting used. Also, it will include those bundle to the only files those need it.

```
optimization: {
  splitChunks: {
    chunks: 'all',
    minSize: 3 * 1024, // It will only create seperate chunk if the size exceeds this value i.e. 3KB.
  },
}
```

#### Module Federation

Multiple separate builds should form a single application. These separate builds should not have dependencies between each other, so they can be developed and deployed individually.

##### Button-App

> Go to module-federation/button-app and run `npm install` (to install the dependencies) then `npm run build` (to build the project) after that `npm run start` (It will run the application at http://localhost:9001/). Keep it running.

##### Image-App

> Go to module-federation/image-app and run `npm install` (to install the dependencies) then `npm run build` (to build the project) after that `npm run start` (It will run the application at http://localhost:9002/). Keep it running too.

You will see the `button` component from **Button-App** is getting used at **Image-App**.
