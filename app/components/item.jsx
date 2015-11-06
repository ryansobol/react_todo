var React = require('react');

var ENTER_KEY = 13;
var ESCAPE_KEY = 27;

var Item = React.createClass({
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
      var node = React.findDOMNode(this.refs.editField);
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }
  },

  handleEdit: function(todo) {
    this.setState({ title: this.props.todo.title });
    this.props.handleEdit(todo);
  },

  handleChange: function(event) {
    this.setState({ title: event.target.value });
  },

  handleKeyDown: function(event) {
    if (event.which === ESCAPE_KEY) {
      this.setState({ title: this.props.todo.title });
      this.props.handleCancel();
    } else if (event.which === ENTER_KEY) {
      this.handleBlur();
    }
  },

  handleBlur: function() {
    var title = this.state.title.trim();

    if (title) {
      this.setState({ title: title });
      this.props.handleUpdate(title);
    } else {
      this.props.handleDestroy();
    }
  },

  render: function() {
    return <li className={React.addons.classSet({
        completed: this.props.todo.completed,
        editing: this.props.editing === this.props.todo
      })}>
      <div className="view">
        <input
          checked={this.props.todo.completed}
          className="toggle"
          onChange={this.props.handleToggle}
          type="checkbox"
        />

        <label onDoubleClick={this.handleEdit.bind(null, this.props.todo)}>
          {this.props.todo.title}
        </label>

        <button className="destroy" onClick={this.props.handleDestroy} />
      </div>

      <input
        className="edit"
        ref="editField"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        type="text"
        value={this.state.title}
      />
    </li>;
  }
});

module.exports = Item;
