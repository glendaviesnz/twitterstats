(function () {
  'use strict';
  angular.module('authentication', []).factory('authenticationService', [
    '$rootScope',
    '$window',
    '$state',
    authenticationService
  ]).run([
    '$window',
    '$rootScope',
    '$state',
    'authenticationService',
    authenticationInit
  ]);
  function authenticationService($rootScope, $window, $state) {
    var session = {
        isLoggedIn: false,
        resetSession: function () {
          this.currentUser = null;
          this.isLoggedIn = false;
          $window.localStorage.removeItem('userData');
          $window.localStorage.removeItem('isLoggedIn');
        },
        googleLogin: function () {
          var user = {
              fullName: 'Jim Smithers',
              email: 'jim.smithers@mega.com',
              authenticationStatus: 'success'
            };
          $window.auth.done(user);
        },
        logout: function () {
          this.resetSession();
          $state.go('login');
        },
        authSuccess: function (userData) {
          this.isLoggedIn = true;
          $window.localStorage.isLoggedIn = true;
          $window.localStorage.userData = userData;
          $state.go('home.dashboard');
          this.currentUser = userData;
          $rootScope.$emit('session-changed');
        },
        authFailed: function () {
          this.resetSession();
          console.log('Authentication failed');
        },
        reAuthenticate: function (event, toState) {
          if ($window.localStorage.isLoggedIn) {
            this.isLoggedIn = true;
            $state.go(toState);
          } else {
            if ('login' !== toState.name) {
              event.preventDefault();
              $state.go('login');
            }
          }
        }
      };
    return session;
  }
  function authenticationInit($window, $rootScope, $state, authenticationService) {
    $rootScope.$on('$stateChangeStart', function (event, toState) {
      if (!authenticationService.isLoggedIn && $state.current.name !== 'login') {
        authenticationService.reAuthenticate(event, toState);
      }
    });
    $window.auth = {
      done: function (userData) {
        if (userData.authenticationStatus === 'success') {
          authenticationService.authSuccess(userData);
        } else {
          authenticationService.authFailed(userData);
        }
      }
    };
  }
}());