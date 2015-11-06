var ENTER_KEY = 13;

var Header = React.createClass({
  handleKeyDown: function(event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    var node = this.refs.newField;
    var title = node.value.trim();

    if (!title) {
      return;
    }

    this.props.handleCreate(title);
    node.value = '';
  },

  render: function() {
    return <header className="header">
      <h1>todos</h1>
      <input
        autoFocus={true}
        className="new-todo"
        onKeyDown={this.handleKeyDown}
        placeholder="What needs to be done?"
        ref="newField"
      />
    </header>;
  }
});

module.exports = Header;
