(function () {
 'use strict';

angular.module('twitterstats.networks', ['sigmaDirectives'])

        .config(function($stateProvider) {
            $stateProvider.state('home.networks', {
                url: 'networks',
                views: {
                    "main@home": {
                        controller: 'NetworksCtrl as networks',
                        templateUrl: 'networks/networks.tpl.html'
                    }
                },
                data: {pageTitle: 'Networks'}
            });
        })


        .controller('NetworksCtrl', [NetworksCtrl]);

function NetworksCtrl() {



}

})();