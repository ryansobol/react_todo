var React = require('react');

var Header = require('./header');
var Main = require('./main');
var Footer = require('./footer');

var App = React.createClass({
  getInitialState: function() {
    return {
      todos: [],
      showing: 'all',
      editing: null
    };
  },

  componentWillMount: function() {
    this.activeCount = this.completedCount = 0;
  },

  componentWillUpdate: function(nextProps, nextState) {
    this.activeCount = this.completedCount = 0;

    nextState.todos.forEach(function(todo) {
      if (todo.completed) {
        this.completedCount += 1;
      } else {
        this.activeCount += 1;
      }
    }, this);
  },

  render: function() {
    if (this.state.todos.length) {
      var main =
        <Main
          todos={this.state.todos}
          showing={this.state.showing}
          editing={this.state.editing}
          activeCount={this.activeCount}
          handleToggle={this.handleToggle}
          handleDestroy={this.handleDestroy}
          handleEdit={this.handleEdit}
          handleUpdate={this.handleUpdate}
          handleCancel={this.handleCancel}
          handleToggleAll={this.handleToggleAll}
        />;

      var footer =
        <Footer
          showing={this.state.showing}
          activeCount={this.activeCount}
          completedCount={this.completedCount}
          handleShowAll={this.handleShowAll}
          handleShowActive={this.handleShowActive}
          handleShowCompleted={this.handleShowCompleted}
          handleClearCompleted={this.handleClearCompleted}
        />;
    }

    return (
      <div>
        <Header handleCreate={this.handleCreate}/>
        {main}
        {footer}
      </div>
    );
  },

  handleCreate: function(title) {
    var todos = this.state.todos.concat({ title: title, completed: false });
    this.setState({ todos: todos });
  },

  handleToggleAll: function(event) {
    var todos = this.state.todos.map(function(todo) {
      return Object.assign({}, todo, { completed: event.target.checked });
    });

    this.setState({ todos: todos });
  },

  handleToggle: function(toggleTodo) {
    var todos = this.state.todos.map(function(todo) {
      if (toggleTodo !== todo) {
        return todo;
      }

      return Object.assign({}, toggleTodo, {
        completed: !toggleTodo.completed
      });
    });

    this.setState({ todos: todos });
  },

  handleEdit: function(todo) {
    this.setState({ editing: todo });
  },

  handleCancel: function() {
    this.setState({ editing: null });
  },

  handleUpdate: function(saveTodo, title) {
    var todos = this.state.todos.map(function(todo) {
      if (saveTodo !== todo) {
        return todo;
      }

      return Object.assign({}, saveTodo, { title: title });
    });

    this.setState({ todos: todos, editing: null });
  },

  handleDestroy: function(destroyTodo) {
    var todos = this.state.todos.filter(function(todo) {
      return destroyTodo !== todo;
    });

    this.setState({ todos: todos });
  },

  handleClearCompleted: function() {
    var todos = this.state.todos.filter(function(todo) {
      return !todo.completed;
    });

    this.setState({ todos: todos });
  },

  handleShowAll: function() {
    this.setState({ showing: 'all' });
  },

  handleShowActive: function() {
    this.setState({ showing: 'active' });
  },

  handleShowCompleted: function() {
    this.setState({ showing: 'completed' });
  }
});

module.exports = App;
