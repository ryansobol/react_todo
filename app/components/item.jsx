import React from 'react';
import { ENTER_KEY, ESCAPE_KEY } from 'key_codes'

const Item = React.createClass({
  getInitialState: function() {
    return { title: this.props.todo.title };
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return (
      nextProps.todo !== this.props.todo ||
      nextProps.editing !== this.props.editing ||
      nextState.title !== this.state.title
    );
  },

  componentDidUpdate: function(prevProps) {
    if (!prevProps.editing && this.props.editing) {
      const node = this.refs.editField;
      node.focus();
      node.setSelectionRange(0, node.value.length);
    }
  },

  handleClick: function() {
    this.props.destroyTodo(this.props.todo);
  },

  handleDoubleClick: function() {
    this.props.startEditting(this.props.todo);
    this.setState({ title: this.props.todo.title });
  },

  handleChangeCheckbox: function() {
    this.props.toggleTodo(this.props.todo);
  },

  handleChangeTextField: function(event) {
    this.setState({ title: event.target.value });
  },

  handleKeyDown: function(event) {
    if (event.which === ENTER_KEY) {
      this.refs.editField.blur();
    }
    else if (event.which === ESCAPE_KEY) {
      event.preventDefault();
      this.props.stopEditting();
      this.setState({ title: this.props.todo.title });
    }
  },

  handleBlur: function() {
    const title = this.state.title.trim();

    if (title) {
      this.props.updateTodo(this.props.todo, title);
      this.setState({ title: title });
    } else {
      this.props.destroyTodo(this.props.todo);
    }
  },

  render: function() {
    const classes = [];

    if (this.props.todo.completed) {
      classes.push('completed');
    }

    if (this.props.editing === this.props.todo) {
      classes.push('editing')
    }

    return <li className={classes.join(' ')}>
      <div className="view">
        <input
          checked={this.props.todo.completed}
          className="toggle"
          onChange={this.handleChangeCheckbox}
          type="checkbox"
        />

        <label onDoubleClick={this.handleDoubleClick}>
          {this.props.todo.title}
        </label>

        <button className="destroy" onClick={this.handleClick} />
      </div>

      <input
        className="edit"
        ref="editField"
        onBlur={this.handleBlur}
        onChange={this.handleChangeTextField}
        onKeyDown={this.handleKeyDown}
        type="text"
        value={this.state.title}
      />
    </li>;
  }
});

export default Item;
