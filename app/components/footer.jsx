var Footer = React.createClass({
  pluralize: function(count, word) {
    return count === 1 ? word : word + 's';
  },

  isSelected: function(type) {
    return this.props.showing === type ? 'selected' : null;
  },

  render: function() {
    if (this.props.completedCount) {
      var clearButton = <button
        className="clear-completed"
        onClick={this.props.handleClearCompleted}>
        Clear completed
      </button>;
    }

    return <footer className="footer">
      <span className="todo-count">
        <strong>{this.props.activeCount}</strong>
        {this.pluralize(this.props.activeCount, ' item')} left
      </span>

      <ul className="filters">
        <li>
          <a
            className={this.isSelected('all')}
            onClick={this.props.handleShowAll}>
            All
          </a>
        </li>
        {' '}
        <li>
          <a
            className={this.isSelected('active')}
            onClick={this.props.handleShowActive}>
            Active
          </a>
        </li>
        {' '}
        <li>
          <a
            className={this.isSelected('completed')}
            onClick={this.props.handleShowCompleted}>
            Completed
          </a>
        </li>
      </ul>

      {clearButton}
    </footer>;
  }
});

module.exports = Footer;
