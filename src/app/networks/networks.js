angular.module('twitterstats.networks', ['ui.router','sigmaDirectives','ngAnimate'])

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


        .controller('NetworksCtrl', ['dataService', NetworksCtrl]);

function NetworksCtrl(dataService) {
    var vm = this;
    vm.tweeter = { handle: '', profilePic: '', hideProfile: true, followers: 0, following: 0, tweets: 0 };
    vm.networkData = dataService.getNetworkData();
}