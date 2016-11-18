import { RfinderPage } from './app.po';

describe('rfinder App', function() {
  let page: RfinderPage;

  beforeEach(() => {
    page = new RfinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
