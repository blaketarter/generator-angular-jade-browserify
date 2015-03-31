let angular = require('angular');

angular
  .module('app')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'indexController'
      })
      .when('/index', {
        redirectTo: '/'
      })
      .when('/404', {
        templateUrl: 'views/404.html',
        controller: '404Controller'
      })
      .otherwise({
        redirectTo: '/404'
      });

      $locationProvider.html5Mode(true);
  }])
  .run(function($rootScope, $location) {

    outdatedBrowser({
      bgColor: '#f25648',
      color: '#ffffff',
      lowerThan: 'transform',
      languagePath: ''
    });
  })
  .constant('BASE_URL', document.getElementsByTagName('base')[0].href);
