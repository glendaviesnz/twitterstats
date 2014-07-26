
describe('twitterstats dashboard page', function() {
    beforeEach(function() {
        browser.get('http://dev.twitterstats.com/#/dashboard');
    });

    it('should have correct page title', function() {

        expect(browser.getTitle()).toEqual('Dashboard | twitterstats');

    });

});
