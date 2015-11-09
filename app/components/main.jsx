var Item = require('./item');

var Main = React.createClass({
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
  },

  render: function() {
    var items = this.getShownTodos().map(function(todo, index) {
      return <Item
        editing={this.props.editing}
        handleCancel={this.props.handleCancel}
        handleDestroy={this.props.handleDestroy}
        handleEdit={this.props.handleEdit}
        handleToggle={this.props.handleToggle}
        handleUpdate={this.props.handleUpdate}
        key={index}
        todo={todo}
      />;
    }, this);

    return <section className="main">
      <input
        checked={this.props.activeCount === 0}
        className="toggle-all"
        onChange={this.props.handleToggleAll}
        type="checkbox"
      />

      <ul className="todo-list">{items}</ul>
    </section>;
  }
});

module.exports = Main;
