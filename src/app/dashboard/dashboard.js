angular.module('twitterstats.dashboard', ['ui.router', 'nvd3ChartDirectives'])

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


        .controller('DashboardCtrl', [DashboardCtrl]);

function DashboardCtrl() {

    var vm = this;
    vm.getPieData = function() {
        return [
            {
                key: "US",
                y: Math.floor((Math.random() * 10) + 1)
            },
            {
                key: "UK",
                y: Math.floor((Math.random() * 10) + 1)
            },
            {
                key: "Canada",
                y: Math.floor((Math.random() * 10) + 1)
            },
            {
                key: "Australia",
                y: Math.floor((Math.random() * 10) + 1)
            },
            {
                key: "France",
                y: Math.floor((Math.random() * 10) + 1)
            },
            {
                key: "Germany",
                y: Math.floor((Math.random() * 10) + 1)
            }
        ];
    };
    vm.getbarData = function() {
        return [
            {
                key: "Number of tweets in last minute",
                values: [
                    ["#ipadgames", Math.floor((Math.random() * 10000) + 1000)],
                    ["#worldcup", Math.floor((Math.random() * 10000) + 1000)],
                    ["#ukraine", Math.floor((Math.random() * 10000) + 1000)],
                    ["#mileycyrus", Math.floor((Math.random() * 10000) + 1000)],
                    ["#isis", Math.floor((Math.random() * 10000) + 1000)]
                ]
            }
        ];
    };

    vm.barData = vm.getbarData();

    vm.pieData = vm.getPieData();

    vm.updatePie = function() {
        vm.pieData = vm.getPieData();
    };
    vm.updateBar = function() {
        vm.barData = vm.getbarData();
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