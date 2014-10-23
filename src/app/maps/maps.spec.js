describe('MapsCtrl', function() {

    beforeEach(angular.mock.module('twitterstats.maps'));
    beforeEach(function() {
        

        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            MapsCtrl = $controller('MapsCtrl as maps', {
                $scope: scope
            });
        });
    });
    it('should have a MapsCtrl controller', function() {
        expect(MapsCtrl).toBeDefined();
    });

});