# React Todo v0.1.0

**React Todo** is a single-page todo application inspired by [TodoMVC](http://todomvc.com). It's a simple example on how to architect front-end applications in 2015 while acknowledging the past and looking toward the future.

The MIT license - Copyright (c) 2015 [Ryan Sobol](http://ryansobol.com)

## Architecture

- Request static assets that load a tree of dynamic React components
- Implement components with ES5 object-oriented programming
- Separate components by concerns into multiple files
- Export and require both components and libraries with CommonJS modules
- Pass state and behavior down to child components
- Bubble events up to parent components
- Manage components using it's API and lifecycle hooks
- Render components with JSX templates
- Model the system with immutable entities and collections
- Manipulate the model with functional programming (e.g. `map`, `filter`)
- Compare the model using strict equality (i.e. `===`)
- Install dependencies and use helper scripts with npm
- Build the application with Brunch and Babel
- Deploy to the Internet with Surge

### Trade-offs

- Borrowed the HTML and CSS from the [TodoMVC App Template](https://github.com/tastejs/todomvc-app-template)
- No persistence or routing as defined by the [TodoMVC App Specification](https://github.com/tastejs/todomvc/blob/master/app-spec.md)
