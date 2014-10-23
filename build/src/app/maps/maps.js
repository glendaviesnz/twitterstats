(function () {
 'use strict';

angular.module('twitterstats.maps', ['ui.router','leafletDirectives'])

        .config(function($stateProvider) {
            $stateProvider.state('home.maps', {
                url: 'maps',
                views: {
                    "main@home": {
                        controller: 'MapsCtrl as maps',
                        templateUrl: 'maps/maps.tpl.html'
                    }
                },
                data: {pageTitle: 'Maps'}
            });
        })


        .controller('MapsCtrl', [ MapsCtrl]);

function MapsCtrl() {
    var vm = this;
    
}

})();