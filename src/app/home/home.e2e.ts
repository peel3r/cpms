describe('App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'CPMS';
    expect(subject).toEqual(result);
  });

  it('should have `Pain Assessment` x-large', () => {
    let subject = element(by.css('[x-large]')).getText();
    let result  = 'Pain Assessment';
    expect(subject).toEqual(result);
  });


});
