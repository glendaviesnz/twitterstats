describe('NetworksCtrl', function() {

    beforeEach(angular.mock.module('twitterstats.networks'));
    beforeEach(function() {
        dataServiceMock = jasmine.createSpyObj('dataService', ['getNetworkData']);

        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            NetworksCtrl = $controller('NetworksCtrl as networks', {
                $scope: scope,
                dataService: dataServiceMock
            });
        });
    });
    it('should have a NetworksCtrl controller', function() {
        expect(NetworksCtrl).toBeDefined();
    });

    it('should call getNetworkData on  dataService', function() {
        expect(dataServiceMock.getNetworkData).toHaveBeenCalled();
    });
    
    it('should have default tweeter object defined', function() {
        expect(scope.networks.tweeter).toEqual({ handle: '', profilePic: '', hideProfile: true, followers: 0, following: 0, tweets: 0 });
    });
});