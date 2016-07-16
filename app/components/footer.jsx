import React from 'react';

const Footer = React.createClass({
  handleClear() {
    this.props.clearCompletedTodos();
  },

  handleShowActive() {
    this.props.showActiveTodos();
  },

  handleShowAll() {
    this.props.showAllTodos();
  },

  handleShowCompleted() {
    this.props.showCompletedTodos();
  },

  isSelected(type) {
    return this.props.showing === type ? 'selected' : null;
  },

  pluralize(count, word) {
    return count === 1 ? word : `${word}s`;
  },

  render() {
    let clearButton;

    if (this.props.completedCount) {
      clearButton = <button
        className="clear-completed"
        onClick={this.handleClear}
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
            onClick={this.handleShowAll}
          >
            All
          </a>
        </li>
        {' '}
        <li>
          <a
            className={this.isSelected('active')}
            onClick={this.handleShowActive}
          >
            Active
          </a>
        </li>
        {' '}
        <li>
          <a
            className={this.isSelected('completed')}
            onClick={this.handleShowCompleted}
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
