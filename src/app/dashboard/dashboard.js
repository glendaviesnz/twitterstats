angular.module('twitterstats.dashboard', ['nvd3ChartDirectives'])

        .config(function($stateProvider) {
            $stateProvider.state('home.dashboard', {
                url: 'dashboard',
                views: {
                    "main@home": {
                        controller: 'DashboardCtrl as dashboard',
                        templateUrl: 'dashboard/dashboard.tpl.html'
                    }
                },
                data: {pageTitle: 'Dashboard'}
            });
        })


        .controller('DashboardCtrl', ['dataService', DashboardCtrl]);

function DashboardCtrl(dataService) {

    var vm = this;
    vm.lineData = dataService.getLineData();

    vm.barData = dataService.getBarData();

    vm.pieData = dataService.getPieData();

    vm.updatePie = function() {
        vm.pieData = dataService.getPieData();
    };
    vm.updateBar = function() {
        vm.barData = dataService.getBarData();
    };

    vm.xFunction = function() {
        return function(d) {
            return d.key;
        };
    };
    vm.yFunction = function() {
        return function(d) {
            return d.y;
        };
    };


}