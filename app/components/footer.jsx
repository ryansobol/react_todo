import React from 'react';

const Footer = React.createClass({
  isSelected: function(type) {
    return this.props.showing === type ? 'selected' : null;
  },

  pluralize: function(count, word) {
    return count === 1 ? word : word + 's';
  },

  render: function() {
    let clearButton;

    if (this.props.completedCount) {
      clearButton = <button
        className="clear-completed"
        onClick={this.props.clearCompletedTodos}
      >
        Clear completed
      </button>;
    }

    return <footer className="footer">
      <span className="todo-count">
        <strong>{this.props.activeCount}</strong>
        {' '}
        {this.pluralize(this.props.activeCount, 'item')} left
      </span>

      <ul className="filters">
        <li>
          <a
            className={this.isSelected('all')}
            onClick={this.props.showAllTodos}
          >
            All
          </a>
        </li>
        {' '}
        <li>
          <a
            className={this.isSelected('active')}
            onClick={this.props.showActiveTodos}
          >
            Active
          </a>
        </li>
        {' '}
        <li>
          <a
            className={this.isSelected('completed')}
            onClick={this.props.showCompletedTodos}
          >
            Completed
          </a>
        </li>
      </ul>

      {clearButton}
    </footer>;
  }
});

export default Footer;
