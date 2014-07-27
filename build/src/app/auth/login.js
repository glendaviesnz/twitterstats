(function () {
  'use strict';
  angular.module('twitterstats.login', ['ui.router']).config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('login', {
        url: '/login',
        views: {
          'login': {
            controller: 'LoginCtrl as login',
            templateUrl: 'auth/login.tpl.html'
          }
        },
        data: { pageTitle: 'Please log in' }
      });
    }
  ]).controller('LoginCtrl', [
    'authenticationService',
    LoginCtrl
  ]);
  function LoginCtrl(authenticationService) {
    var vm = this;
    vm.oauth = function () {
      authenticationService.googleLogin();
    };
  }
}());