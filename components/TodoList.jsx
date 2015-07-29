var React = require('react'),
    Todo = require('./Todo.jsx'),
    style = require('./style.jsx');

var TodoList = React.createClass({
  getInitialState: function() { 
    return { 
      data: this.props.data, 
      titleValue: "", 
      detailValue: "" 
    }; 
  }, 
  changeTitle: function(e) { 
    this.setState({titleValue: e.target.value});
  }, 
  changeDetail: function(e) { 
    this.setState({detailValue: e.target.value});
  }, 
  addTodo: function() { 
    this.props.data.push({
      title: this.state.titleValue,
      detail: this.state.detailValue
    });
    this.setState({
      data: this.props.data,
      titleValue: '',
      detailValue: ''
    });
  },
  onDelete: function(title) {
    this.props.data.forEach(function(item, i, items) {
      if (item.title == title) {
        items.splice(i, 1);
      }
    });
    this.setState({
      data: this.props.data
    });
  },
  render: function() {
    var todo = this.props.data.map(function(obj, i, todos) {
      return <Todo title={obj.title}>{obj.detail}</Todo>;
    });
    return (
      <div className = "todoList">
        <div>
          Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
          Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
          <button onClick={this.addTodo}>Add</button> 
        </div>
        <table style={style.tableContent}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = TodoList;