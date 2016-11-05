import { ColmenaPage } from './app.po';

describe('colmena App', function() {
  let page: ColmenaPage;

  beforeEach(() => {
    page = new ColmenaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
