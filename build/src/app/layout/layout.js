
angular.module('twitterstats.layout', ['ui.router', 'ui.bootstrap'])

        .config(function($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                views: {
                    "main": {
                        controller: 'MasterCtrl',
                        templateUrl: 'layout/main.tpl.html'
                    },
                    "side-navigation@home": {
                        templateUrl: 'layout/side-navigation.tpl.html'
                    }
                },
                data: {pageTitle: 'Home'}

            });
        });

