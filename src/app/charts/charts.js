angular.module('twitterstats.charts', ['ui.router', 'nvd3ChartDirectives'])

        .config(function($stateProvider) {
            $stateProvider.state('home.charts', {
                url: 'charts',
                views: {
                    "main@home": {
                        controller: 'ChartsCtrl as charts',
                        templateUrl: 'charts/charts.tpl.html'
                    }
                },
                data: {pageTitle: 'Charts'}
            });
        })


        .controller('ChartsCtrl', [ChartsCtrl]);

function ChartsCtrl() {
    var vm = this;
    vm.chartData = {};
    vm.test = 'bob';
    vm.test2 = 9;
    vm.updateChartData = function() {
        return [
                    {
                        key: "Number of tweets in last minute",
                        values: [
                            [vm.test, 7],
                            ["henry", 8],
                            ["james", 9]
                        ]
                    }
                ];
    };

    vm.updateChart = function() {
        vm.chartData = vm.updateChartData();
        console.log(vm.chartData);
    };
}