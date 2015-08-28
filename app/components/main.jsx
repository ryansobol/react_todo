var React = require('react');
var Item = require('./item');

var Main = React.createClass({
  render: function() {
    var items = this.getShownTodos().map(function(todo, index) {
      return (
        <Item
          key={index}
          todo={todo}
          editing={this.props.editing}
          handleToggle={this.props.handleToggle.bind(null, todo)}
          handleDestroy={this.props.handleDestroy.bind(null, todo)}
          handleEdit={this.props.handleEdit.bind(null, todo)}
          handleUpdate={this.props.handleUpdate.bind(null, todo)}
          handleCancel={this.props.handleCancel}
        />
      );
    }, this);

    return (
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={this.props.activeCount === 0}
          onChange={this.props.handleToggleAll}
        />

        <ul className="todo-list">
          {items}
        </ul>
      </section>
    );
  },

  getShownTodos: function() {
    return this.props.todos.filter(function(todo) {
      switch (this.props.showing) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
      }
    }, this);
  }
});

module.exports = Main;
