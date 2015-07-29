var React = require('react'),
    style = require('./style.jsx'),
    TodoActions = require('../actions/TodoActions.jsx');

var Todo = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      checked: false
    };
  },
  handleChange: function(e) {
    this.setState({checked: e.target.checked});
  },
  _onDelete: function () {
    TodoActions.destroy(this.props.id);
  },
  render: function() {
    return (
      <tr style={this.state.checked ? style.checkedTodo : style.notCheckedTodo}>
        <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td>
        <td style={style.tdContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={style.tdContent}>{this.props.title}</td>
        <td style={style.tdContent}>{this.props.children}</td>
      </tr>
    );
  }
});

module.exports = Todo;