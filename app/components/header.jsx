import { ENTER_KEY } from 'key_codes';
import React from 'react';

const Header = React.createClass({
  getInitialState() {
    return { value: '' };
  },

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.value !== this.state.value;
  },

  handleChange(event) {
    const nextValue = event.target.value;

    this.setState({ value: nextValue });
  },

  handleKeyPress(event) {
    if (event.which !== ENTER_KEY) {
      return;
    }

    const value = this.state.value.trim();

    if (!value) {
      return;
    }

    this.props.createTodo(value);
    this.setState({ value: '' });
  },

  render() {
    return <header className="header">
      <h1>todos</h1>
      <input
        autoFocus={true}
        className="new-todo"
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        placeholder="What needs to be done?"
        value={this.state.value}
      />
    </header>;
  }
});

export default Header;
