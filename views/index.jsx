var React = require('react');
    
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
      titleValue: '',
      detailValue: ''
    });
  },
  render: function() {
    var todo = this.props.data.map(function(obj) {
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

var Todo = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    this.props.trStyle = style.notCheckedTodo;
    return {
      checked: false
    };
  },
  handleChange: function(e) {
    this.setState({checked: e.target.checked});
    this.props.trStyle = e.target.checked ? style.checkedTodo : style.notCheckedTodo;
  },
  render: function() {
    return (
      <tr style={this.props.trStyle}>
        <td style={style.tdContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={style.tdContent}>{this.props.title}</td>
        <td style={style.tdContent}>{this.props.children}</td>
      </tr>
    );
  }
});

var TodoForm = React.createClass({
  render: function() {
    return (
      <div className = "todoForm">
        I am a TodoForm.
      </div>
    );
  }
});

var style = {
  tableContent: {
    border: "2px solid black"
  },
  tdContent: {
    border: "1px solid black"
  },
  checkedTodo: { 
    textDecoration: "line-through" 
  }, 
  notCheckedTodo: { 
    textDecoration: "none" 
  }
};

module.exports = TodoBox;