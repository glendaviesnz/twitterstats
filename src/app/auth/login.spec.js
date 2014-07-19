describe('LoginCtrl', function() {

    beforeEach(angular.mock.module('twitterstats.login'));
    beforeEach(function() {
        authServiceMock = jasmine.createSpyObj('authenticationService', ['googleLogin']);

        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            LoginCtrl = $controller('LoginCtrl as login', {
                $scope: scope,
                authenticationService: authServiceMock
            });
        });
    });
    it('should have a LoginCtrl controller', function() {
        expect(LoginCtrl).toBeDefined();
    });

    it('should call googleLogin service', function() {
        scope.login.oauth();
        expect(authServiceMock.googleLogin).toHaveBeenCalled();

    });
});