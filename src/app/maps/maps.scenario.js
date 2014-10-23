
describe('twitterstats networks page', function() {
    
    beforeEach(function() {
        
        browser.get('http://dev.twitterstats.com/#/networks');
        
    });
    
    it('should have correct page title', function() {

        expect(browser.getTitle()).toEqual('Networks | twitterstats');

    });

});
