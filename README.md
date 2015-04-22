React Quickstart
================

_React + Webpack === yum!_

This is a quickstart project aimed at getting you writing React.js apps with a minimum of configuration. Instead of relying on build tools like grunt or gulp, it uses only webpack and npm `scripts`.

### Installing

It makes sense to clone this repo and just build on the existing project. You can also install with NPM as a convenience:

    npm install react-quickstart

in the future, rather than landing this starter project in `node_modules/react-quickstart`, installing `react-quickstart` globally will install a generator script that creates starter projects anywhere you want.

### Workflow

1. Start webpack-dev-server

        npm run dev

2. Run application

        open http://localhost:8080


By default, the dev server uses source maps, so you can debug source files in your favorite browser dev tool. If you don't need debugging capabilities, use the `npm run dev-fast` script, which is faster and still maps errors to the appropriate source file and line.

Resources
---------
- react-webpack-cookbook: https://github.com/christianalfoni/react-webpack-cookbook
- Pete Hunt's Webpack howto: https://github.com/petehunt/webpack-howto
- Webpack dev server: https://github.com/webpack/docs/wiki/webpack-dev-server
- Webpack docs: http://webpack.github.io/docs/
