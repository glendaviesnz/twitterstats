angular.module('common', [])
        .factory('dataProvider', function() {

            return {
                getBarData: getBarData,
                getLineData: getLineData,
                getPieData: getPieData
            };

            function getBarData() {
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
            }

            function getLineData() {
                return [
                    {
                        "key": "Tweets per minute",
                        "values": [[5, 10000], [10, 15000], [15, 12000], [20, 5000], [25, 8134], [30, 11689], [35, 9804], [40, 15098], [45, 9876], [50, 7896], [55, 14578], [60, 18904]]
                    }];
            }

            function getPieData() {
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
            }
        });