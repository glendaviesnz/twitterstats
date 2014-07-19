describe( 'MasterCtrl', function() {
  describe( 'isCurrentUrl', function() {
    var MasterCtrl, $location, $scope;

    beforeEach( module( 'twitterstats' ) );

    beforeEach( inject( function( $controller, _$location_, $rootScope ) {
      $location = _$location_;
      $scope = $rootScope.$new();
      MasterCtrl = $controller( 'MasterCtrl', { $location: $location, $scope: $scope });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( MasterCtrl ).toBeTruthy();
    }));
  });
});