var React = require('react'),
	TodoList = require('./TodoList.jsx'),
	TodoForm = require('./TodoForm.jsx');

var TodoBox = React.createClass({
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data={this.props.data} />
        <TodoForm />
      </div>
    );
  }
});

module.exports = TodoBox;