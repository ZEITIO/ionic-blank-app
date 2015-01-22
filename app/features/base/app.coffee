app = angular.module('app', ['ionic'])

app.config ($stateProvider, $urlRouterProvider) ->
  $urlRouterProvider.otherwise('/todos')

  $stateProvider.state 'app',
    abstract: true
    templateUrl: 'features/base/main.html'

  $stateProvider.state 'app.help',
    url: '/help'
    views:
      help:
        templateUrl: 'features/base/help.html'
