# React Todo v0.2.0

**React Todo** is a single-page todo application inspired by [TodoMVC](http://todomvc.com). It's a simple example on how to architect front-end applications in 2016 while acknowledging the past and looking toward the future.

## Architecture

- Request static assets that load a tree of dynamic React components
- Implement components with ES6 object-oriented programming
- Separate components by concerns into multiple files
- Export and require both components and libraries with CommonJS modules
- Pass state and behavior down to child components
- Bubble events up to parent components
- Manage components using its API and lifecycle hooks
- Render components with JSX templates
- Model the system with immutable entities and collections
- Manipulate the model with functional programming (e.g. `map`, `filter`)
- Compare the model using strict equality (i.e. `===`)
- Install dependencies and use helper scripts with npm
- Build the application with Brunch and Babel
- Route client-side requests with React Router
- Deploy to the Internet with Heroku

### Trade-offs

- Borrowed the HTML and CSS from the [TodoMVC App Template](https://github.com/tastejs/todomvc-app-template)
- No persistence as defined by the [TodoMVC App Specification](https://github.com/tastejs/todomvc/blob/master/app-spec.md)
