var React = require('react');

var Footer = React.createClass({
  render: function() {
    if (this.props.completedCount) {
      var clearButton = (
        <button
          className="clear-completed"
          onClick={this.props.handleClearCompleted}>
            Clear completed
        </button>
      );
    }

    // React idiom for shortcutting to `classSet` since it'll be used often
    var cx = React.addons.classSet;

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.activeCount}</strong>
          {this.pluralize(this.props.activeCount, ' item')} left
        </span>

        <ul className="filters">
          <li>
            <a
              className={cx({selected: this.props.showing === 'all'})}
              onClick={this.props.handleShowAll}>
                All
            </a>
          </li>
          {' '}
          <li>
            <a
              className={cx({selected: this.props.showing === 'active'})}
              onClick={this.props.handleShowActive}>
                Active
            </a>
          </li>
          {' '}
          <li>
            <a
              className={cx({selected: this.props.showing === 'completed'})}
              onClick={this.props.handleShowCompleted}>
                Completed
            </a>
          </li>
        </ul>

        {clearButton}
      </footer>
    );
  },

  pluralize: function(count, word) {
    return count === 1 ? word : word + 's';
  }
});

module.exports = Footer;
