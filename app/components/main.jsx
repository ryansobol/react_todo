import Item from 'components/item';
import React from 'react';

const Main = React.createClass({
  componentWillMount() {
    this.shownTodos = this.props.todos;
  },

  componentWillUpdate(nextProps, _nextState) {
    this.shownTodos = nextProps.todos.filter((todo) => {
      switch (nextProps.showing) {
        case 'active':
          return !todo.completed;
        case 'completed':
          return todo.completed;
        default:
          return true;
      }
    }, this);
  },

  handleChange(event) {
    this.props.toggleAllTodos(event.target.checked);
  },

  render() {
    const items = this.shownTodos.map(function(todo, index) {
      return <Item
        destroyTodo={this.props.destroyTodo}
        editing={this.props.editing}
        key={index}
        startEditting={this.props.startEditting}
        stopEditting={this.props.stopEditting}
        todo={todo}
        toggleTodo={this.props.toggleTodo}
        updateTodo={this.props.updateTodo}
      />;
    }, this);

    return <section className="main">
      <input
        checked={this.props.activeCount === 0}
        className="toggle-all"
        onChange={this.handleChange}
        type="checkbox"
      />

      <ul className="todo-list">{items}</ul>
    </section>;
  }
});

export default Main;
