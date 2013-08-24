'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives'])    
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/',      {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/group/:groupId',      {templateUrl: 'partials/group.html', controller: 'groupCtrl'});
        $routeProvider.when('/group/:groupId/store/:storeId',      {templateUrl: 'partials/store.html', controller: 'storeCtrl'});
  }]);
