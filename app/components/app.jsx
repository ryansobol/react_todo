import Footer from 'components/footer';
import Header from 'components/header';
import Main from 'components/main';
import React from 'react';

const App = React.createClass({
  getInitialState: function() {
    return {
      editing: null,
      showing: 'all',
      todos: []
    };
  },

  componentWillMount: function() {
    this.activeCount = this.completedCount = 0;
  },

  componentWillUpdate: function(nextProps, nextState) {
    const completed = nextState.todos.reduce(function(prev, todo) {
      return todo.completed ? prev + 1 : prev;
    }, 0);

    this.activeCount = nextState.todos.length - completed;
    this.completedCount = completed;
  },

  clearCompletedTodos: function() {
    const todos = this.state.todos.filter(function(element) {
      return !element.completed;
    });

    this.setState({ todos: todos });
  },

  createTodo: function(title) {
    const todos = this.state.todos.concat({
      completed: false,
      title: title
    });

    this.setState({ todos: todos });
  },

  destroyTodo: function(todo) {
    const todos = this.state.todos.filter(function(element) {
      return todo !== element;
    });

    this.setState({ todos: todos });
  },

  showActiveTodos: function() {
    this.setState({ showing: 'active' });
  },

  showAllTodos: function() {
    this.setState({ showing: 'all' });
  },

  showCompletedTodos: function() {
    this.setState({ showing: 'completed' });
  },

  startEditting: function(todo) {
    this.setState({ editing: todo });
  },

  stopEditting: function() {
    this.setState({ editing: null });
  },

  toggleAllTodos: function(completed) {
    const todos = this.state.todos.map(function(todo) {
      return Object.assign({}, todo, { completed: completed });
    });

    this.setState({ todos: todos });
  },

  toggleTodo: function(todo) {
    const todos = this.state.todos.map(function(element) {
      if (todo !== element) {
        return element;
      }

      return Object.assign({}, todo, { completed: !todo.completed });
    });

    this.setState({ todos: todos });
  },

  updateTodo: function(todo, title) {
    const todos = this.state.todos.map(function(element) {
      if (todo !== element) {
        return element;
      }

      return Object.assign({}, todo, { title: title });
    });

    this.setState({ editing: null, todos: todos });
  },

  render: function() {
    let main;
    let footer;

    if (this.state.todos.length) {
      main = <Main
        activeCount={this.activeCount}
        destroyTodo={this.destroyTodo}
        editing={this.state.editing}
        showing={this.state.showing}
        startEditting={this.startEditting}
        stopEditting={this.stopEditting}
        todos={this.state.todos}
        toggleAllTodos={this.toggleAllTodos}
        toggleTodo={this.toggleTodo}
        updateTodo={this.updateTodo}
      />;

      footer = <Footer
        activeCount={this.activeCount}
        clearCompletedTodos={this.clearCompletedTodos}
        completedCount={this.completedCount}
        showActiveTodos={this.showActiveTodos}
        showAllTodos={this.showAllTodos}
        showCompletedTodos={this.showCompletedTodos}
        showing={this.state.showing}
      />;
    }

    return <div>
      <Header createTodo={this.createTodo} />
      {main}
      {footer}
    </div>;
  }
});

export default App;
