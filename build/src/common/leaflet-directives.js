(function () {
 'use strict';

angular.module('leafletDirectives', [])
        .directive('leafletMap', function () {
            return{
                restrict: "EA",
                template: "<div id='map'></div>",
                scope: {
                    
                },
                link: function (scope, elem, attrs) {
                    var map = L.map('map').setView([attrs.long, attrs.lat], 13);
                    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                        maxZoom: 18
                    }).addTo(map);
                }
            };
        });

})();