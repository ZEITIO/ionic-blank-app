app = angular.module('app')

app.controller 'TodosCtrl', ($scope, TodosService) ->
  $scope.todos = TodosService.todos

app.controller 'TodoCtrl', ($scope, todo) ->
  $scope.todo = todo

app.factory 'TodosService', () ->
  todos = [
      { title: "Take out the trash",   done: true  },
      { title: "Do laundry",           done: false },
      { title: "Start cooking dinner", done: false }
   ]

  {
    todos: todos
    getTodo: (index) -> todos[index]
  }
