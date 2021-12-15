# Ontario Design System Components

This project contains the Ontario Design System Web Components.

Web Components provide strong encapsulation for reusable components that can be integrated into web applications.

## Built using Stencil

[Stencil](https://stenciljs.com), _a toolchain for building reusable, scalable Design Systems._

Learn more in the [Stencil Docs](https://stenciljs.com/docs/introduction).

## Quick Start

Using [Lerna](https://github.com/lerna/lerna), this project is made up of multiple packages that are linked together. Lerna takes care of bootstrapping the packages within this repository together with their dependencies. It will install the `node_modules` for each package, then link the internal project packages together.

### Installing Lerna

Firstly, Lerna needs to be installed at the root level of the project.

At the repository root run,

```bash
npm install
```

### Bootstrapping Project Packages

Next, each repository needs to be bootstrapped to setup and link all the dependencies.

While at repository root run,

```bash
npm run bootstrap
```

### Building Component Library Packages

The component library packages have to be built/updated before they can be used. 

Simply run at the root of the repository,

```bash
npm run build-libs
```

This will build the component library packages and prep them for use with any app.

### Next Steps

Checkout each package in the [`packages`](packages) folder. They each have their own Readme and instructions on how to get started.

## Packages

This project is made up of three packages.

### `ontario-design-system-component-library`

The `ontario-design-system-component-library` is the heart of the project, it contains each of the the custom web components. It uses the Stencil toolchain to allow for easy creation and compilation of custom components.

The build process of this library emits NPM package compatible packages as well as component libraries for other JavaScript UI Frameworks.

#### Component Development

The project contains an HTML file called `index.html` that is immediately loaded when the development server is started it.  It is a simple place to stage a component for development.

A development server can be run by running,

```bash
npm run start
```

##### Generating a New Component

Stencil CLI can generate a new component within the `src/components` folder. With the `ontario-design-system-component-library` being your current directory run,

```bash
stencil generate name-of-component
```

If you don't have `stencil` installed globally, prefix the command with `npx`,

```bash
npx stencil generate name-of-component
```

#### Building the Library

Wanting to build and test within one of the framework applications?  Running the `build-libs` script from the root triggers this behaviour.

The library can be built independently by running,

```bash
npm run build
```

### `ontario-design-system-component-library-react`

The `ontario-design-system-component-library-react` package is a React wrapper for custom web components generated by the `ontario-design-system-component-library`. It handles all the boilerplate code to wrap the components for import into any React app. Material emitted from the `ontario-design-system-component-library` build process is injected into this process every time there is a new build made within that package.

See the [Stencil Docs on React](https://stenciljs.com/docs/react) for more information.

#### Building the Library

Wanting to build and test within one of the framework applications?  Running the `build-libs` script from the root triggers this behaviour.

The library can be built independently by running,

```bash
npm run build
```

### `app-react` _(Not yet implemented)_

A React frontend to show off the whole process, from `ontario-design-system-component-library` component to React component. It is a simple [Create React App]() application and demos the simplicity of using the generated components.

#### Running the App for Development

The application can be run in development by running,

```bash
npm run start
```

## Resources

Here are some helpful resources one can use to learn more.

- [ReactJS: Web Components]( https://reactjs.org/docs/web-components.html)