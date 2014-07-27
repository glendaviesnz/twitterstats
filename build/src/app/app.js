(function () {
 'use strict';

angular.module('twitterstats', [
    'ngAnimate',
    'common',
    'authentication',
    'templates-app',
    'templates-common',
    'twitterstats.layout',
    'twitterstats.login',
    'twitterstats.dashboard',
    'twitterstats.networks',
    'twitterstats.charts',
    'ui.router'
])
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        })

        .controller('MasterCtrl', ['$scope', 'authenticationService', MasterCtrl]);
        

function MasterCtrl($scope, authenticationService) {
 
    $scope.$on('$stateChangeSuccess', function(event, toState) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | twitterstats';
        }
    });
    $scope.logout = function() {
        authenticationService.logout();
    };
}

})();