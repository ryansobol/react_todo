import Footer from 'components/footer';
import Header from 'components/header';
import Main from 'components/main';
import React from 'react';

const App = React.createClass({
  getInitialState() {
    return {
      editing: null,
      showing: 'all',
      todos: []
    };
  },

  componentWillMount() {
    this.activeCount = this.completedCount = 0;
  },

  componentWillUpdate(nextProps, nextState) {
    const completed = nextState.todos.reduce(
      (prev, todo) => (todo.completed ? prev + 1 : prev),
      0
    );

    this.activeCount = nextState.todos.length - completed;
    this.completedCount = completed;
  },

  clearCompletedTodos() {
    const todos = this.state.todos.filter((element) => !element.completed);

    this.setState({ todos });
  },

  createTodo(title) {
    const todos = this.state.todos.concat({ completed: false, title });

    this.setState({ todos });
  },

  destroyTodo(todo) {
    const todos = this.state.todos.filter((element) => todo !== element);

    this.setState({ todos });
  },

  showActiveTodos() {
    this.setState({ showing: 'active' });
  },

  showAllTodos() {
    this.setState({ showing: 'all' });
  },

  showCompletedTodos() {
    this.setState({ showing: 'completed' });
  },

  startEditting(todo) {
    this.setState({ editing: todo });
  },

  stopEditting() {
    this.setState({ editing: null });
  },

  toggleAllTodos(completed) {
    const todos = this.state.todos.map(
      (todo) => Object.assign({}, todo, { completed })
    );

    this.setState({ todos });
  },

  toggleTodo(todo) {
    const todos = this.state.todos.map((element) => {
      if (todo !== element) {
        return element;
      }

      return Object.assign({}, todo, { completed: !todo.completed });
    });

    this.setState({ todos });
  },

  updateTodo(todo, title) {
    const todos = this.state.todos.map((element) => {
      if (todo !== element) {
        return element;
      }

      return Object.assign({}, todo, { title });
    });

    this.setState({ editing: null, todos });
  },

  render() {
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
