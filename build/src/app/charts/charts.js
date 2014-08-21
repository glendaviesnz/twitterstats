
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
    vm.chartEntries = [{item: '#cars', value: 600}, {item: '#balloons', value: 800}];


    vm.updateChartData = function() {

        var valuesArray = [];

        vm.chartEntries.forEach(function(entry) {
            valuesArray.push(_.toArray(entry));
        });

        return [
            {
                key: "My custom chart",
                values: valuesArray
            }
        ];
    };

    vm.chartData = vm.updateChartData();

    vm.addItem = function() {

        vm.chartEntries.push({item: '', value: 0});

    };

    vm.removeItem = function(index) {

        vm.chartEntries.splice(index, 1);

    };

    vm.updateChart = function(form) {

        if (form.$valid) {

            vm.chartData = vm.updateChartData();

        } else {

            vm.addErrors = true;

        }

    };
}
