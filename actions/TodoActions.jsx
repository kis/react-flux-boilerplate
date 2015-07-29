var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var TodoConstants = require('../constants/TodoConstants.jsx');

var TodoActions = {
  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY,
      id: id
    });
  },

  destroyCompleted: function() {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY_COMPLETED
    });
  }

};

module.exports = TodoActions;