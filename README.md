# What is webpack?

Webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules.

> Running webpack without any configuration will search for `src` folder as module and inside that it will seach any of `src/index<.js, .json, .wasm>` files by default.

#### Asset Modules types:

- `asset/resource` emits a separate file and exports the URL. Previously achievable by using file-loader.
- `asset/inline` exports a data URI of the asset. Previously achievable by using url-loader.
- `asset/source` exports the source code of the asset. Previously achievable by using raw-loader.
- `asset` automatically chooses between exporting a data URI and emitting a separate file. Previously achievable by using url-loader with asset size limit.
