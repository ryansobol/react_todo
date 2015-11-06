var Footer = require('./footer');
var Header = require('./header');
var Main = require('./main');

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
  },

  render: function() {
    if (this.state.todos.length) {
      var main = <Main
        activeCount={this.activeCount}
        editing={this.state.editing}
        handleCancel={this.handleCancel}
        handleDestroy={this.handleDestroy}
        handleEdit={this.handleEdit}
        handleToggle={this.handleToggle}
        handleToggleAll={this.handleToggleAll}
        handleUpdate={this.handleUpdate}
        showing={this.state.showing}
        todos={this.state.todos}
      />;

      var footer = <Footer
        activeCount={this.activeCount}
        completedCount={this.completedCount}
        handleClearCompleted={this.handleClearCompleted}
        handleShowActive={this.handleShowActive}
        handleShowAll={this.handleShowAll}
        handleShowCompleted={this.handleShowCompleted}
        showing={this.state.showing}
      />;
    }

    return <div>
      <Header handleCreate={this.handleCreate}/>
      {main}
      {footer}
    </div>;
  }
});

module.exports = App;
