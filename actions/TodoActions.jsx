var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

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