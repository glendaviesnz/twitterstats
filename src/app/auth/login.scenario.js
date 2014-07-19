var TwitterstatsLoginPage = function() {
  this.nameInput = element(by.id('login-button'));

  this.get = function() {
    browser.get('http://dev.twitterstats.com/#/login');
  };

};

describe('twitterstats login page', function() {
  it('should have login button', function() {
    var twitterstatsLoginPage = new TwitterstatsLoginPage();
    twitterstatsLoginPage.get();
    expect(twitterstatsLoginPage.nameInput.getText()).toEqual('Login with google');
  });
});
