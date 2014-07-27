describe('ChartsCtrl', function() {

    beforeEach(angular.mock.module('twitterstats.charts'));
    beforeEach(function() {
        
        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            NetworksCtrl = $controller('ChartsCtrl as charts', {
                $scope: scope
            });
        });
    });
    it('should have a ChartsCtrl controller', function() {
        expect(ChartsCtrl).toBeDefined();
    });

});