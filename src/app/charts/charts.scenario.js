
describe('twitterstats charts page', function() {
    
    beforeEach(function() {
        
        browser.get('http://dev.twitterstats.com/#/charts');
        
    });
    
    it('should have correct page title', function() {

        expect(browser.getTitle()).toEqual('Charts | twitterstats');

    });

});
