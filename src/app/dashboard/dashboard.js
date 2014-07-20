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


        .controller('DashboardCtrl', ['dataProvider', DashboardCtrl]);

function DashboardCtrl(dataProvider) {

    var vm = this;
    vm.lineData = dataProvider.getLineData();

    vm.barData = dataProvider.getBarData();

    vm.pieData = dataProvider.getPieData();

    vm.updatePie = function() {
        vm.pieData = dataProvider.getPieData();
    };
    vm.updateBar = function() {
        vm.barData = dataProvider.getBarData();
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