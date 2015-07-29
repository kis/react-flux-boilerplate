var React = require('react'),
    Todo = require('./Todo.jsx'),
    style = require('./style.jsx'),
    TodoStore = require('../stores/TodoStore.jsx');

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
      id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
      title: this.state.titleValue,
      detail: this.state.detailValue
    });
    this.setState({
      data: this.props.data,
      titleValue: '',
      detailValue: ''
    });
  },
  
  componentDidMount: function() {
    TodoStore.addChangeListener(this.onDelete);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this.onDelete);
  },
  
  onDelete: function(title) {
    console.log(title);

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
      return <Todo id={obj.id} title={obj.title}>{obj.detail}</Todo>;
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