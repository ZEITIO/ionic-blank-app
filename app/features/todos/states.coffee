app = angular.module('app')

app.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider.state 'app.todos',
    abstract: true
    url: '/todos'
    views:
      todos:
        template: '<ion-nav-view></ion-nav-view>'

  $stateProvider.state 'app.todos.index',
    url: ''
    templateUrl: 'features/todos/index.html'
    controller: 'TodosCtrl'

  $stateProvider.state 'app.todos.show',
    url: '/:todo'
    templateUrl: 'features/todos/show.html'
    controller: 'TodoCtrl'
    resolve:
      todo: ($stateParams, TodosService) ->
        TodosService.getTodo($stateParams.todo)
