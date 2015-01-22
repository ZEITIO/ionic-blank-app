(function() {
  var app;

  app = angular.module('app', ['ionic']);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/todos');
    $stateProvider.state('app', {
      abstract: true,
      templateUrl: 'features/base/main.html'
    });
    return $stateProvider.state('app.help', {
      url: '/help',
      views: {
        help: {
          templateUrl: 'features/base/help.html'
        }
      }
    });
  });

}).call(this);

(function() {
  var app;

  app = angular.module('app');

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app.todos', {
      abstract: true,
      url: '/todos',
      views: {
        todos: {
          template: '<ion-nav-view></ion-nav-view>'
        }
      }
    });
    $stateProvider.state('app.todos.index', {
      url: '',
      templateUrl: 'features/todos/index.html',
      controller: 'TodosCtrl'
    });
    return $stateProvider.state('app.todos.show', {
      url: '/:todo',
      templateUrl: 'features/todos/show.html',
      controller: 'TodoCtrl',
      resolve: {
        todo: function($stateParams, TodosService) {
          return TodosService.getTodo($stateParams.todo);
        }
      }
    });
  });

}).call(this);

(function() {
  var app;

  app = angular.module('app');

  app.controller('TodosCtrl', function($scope, TodosService) {
    return $scope.todos = TodosService.todos;
  });

  app.controller('TodoCtrl', function($scope, todo) {
    return $scope.todo = todo;
  });

  app.factory('TodosService', function() {
    var todos;
    todos = [
      {
        title: "Take out the trash",
        done: true
      }, {
        title: "Do laundry",
        done: false
      }, {
        title: "Start cooking dinner",
        done: false
      }
    ];
    return {
      todos: todos,
      getTodo: function(index) {
        return todos[index];
      }
    };
  });

}).call(this);
