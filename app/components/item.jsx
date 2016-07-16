import { ENTER_KEY, ESCAPE_KEY } from 'key_codes';
import React from 'react';

const Item = React.createClass({
  getInitialState() {
    return { title: this.props.todo.title };
  },

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.todo !== this.props.todo ||
      nextProps.editing !== this.props.editing ||
      nextState.title !== this.state.title
    );
  },

  componentDidUpdate(prevProps) {
    if (!prevProps.editing && this.props.editing) {
      const node = this.editField;

      node.focus();
      node.setSelectionRange(0, node.value.length);
    }
  },

  handleClick() {
    this.props.destroyTodo(this.props.todo);
  },

  handleDoubleClick() {
    this.props.startEditting(this.props.todo);
    this.setState({ title: this.props.todo.title });
  },

  handleChangeCheckbox() {
    this.props.toggleTodo(this.props.todo);
  },

  handleChangeTextField(event) {
    this.setState({ title: event.target.value });
  },

  handleKeyDown(event) {
    if (event.which === ENTER_KEY) {
      this.editField.blur();
    }
    else if (event.which === ESCAPE_KEY) {
      event.preventDefault();
      this.props.stopEditting();
      this.setState({ title: this.props.todo.title });
    }
  },

  handleBlur() {
    const title = this.state.title.trim();

    if (title) {
      this.props.updateTodo(this.props.todo, title);
      this.setState({ title });
    }
    else {
      this.props.destroyTodo(this.props.todo);
    }
  },

  refEditField(ref) {
    this.editField = ref;
  },

  render() {
    const classes = [];

    if (this.props.todo.completed) {
      classes.push('completed');
    }

    if (this.props.editing === this.props.todo) {
      classes.push('editing');
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
        onBlur={this.handleBlur}
        onChange={this.handleChangeTextField}
        onKeyDown={this.handleKeyDown}
        ref={this.refEditField}
        type="text"
        value={this.state.title}
      />
    </li>;
  }
});

export default Item;
