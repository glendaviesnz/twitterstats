describe('twitterstats login page', function() {
    
    beforeEach(function() {
        browser.get('http://dev.twitterstats.com/#/login');
    });
    
    it('should have login button', function() {

        expect(element(by.id('login-button')).getText()).toEqual('Login with google');
        element(by.id('login-button')).click();

    });

});
