describe('DashboardCtrl', function() {

    beforeEach(angular.mock.module('twitterstats.dashboard'));
    beforeEach(function() {
        dataServiceMock = jasmine.createSpyObj('dataService', ['getLineData','getPieData','getBarData']);

        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            DashboardCtrl = $controller('DashboardCtrl as dashboard', {
                $scope: scope,
                dataService: dataServiceMock
            });
        });
    });
    it('should have a DashboardCtrl controller', function() {
        expect(DashboardCtrl).toBeDefined();
    });

    it('should call getLineData on  dataService', function() {
        expect(dataServiceMock.getLineData).toHaveBeenCalled();
    });
    it('should call getPieData on  dataService', function() {
        expect(dataServiceMock.getPieData).toHaveBeenCalled();
    });
    it('should call getBarData on  dataService', function() {
        expect(dataServiceMock.getBarData).toHaveBeenCalled();
    });

});