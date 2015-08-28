var React = require('react');

var ENTER_KEY = 13;

var Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          ref="newField"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          onKeyDown={this.handleKeyDown}
        />
      </header>
    );
  },

  handleKeyDown: function() {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    var node = React.findDOMNode(this.refs.newField);
    var title = node.value.trim();

    if (!title) {
      return;
    }

    this.props.handleCreate(title);
    node.value = '';
  }
});

module.exports = Header;
