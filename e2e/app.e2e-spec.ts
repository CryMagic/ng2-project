import { Ng2ProjcetPage } from './app.po';

describe('ng2-projcet App', () => {
  let page: Ng2ProjcetPage;

  beforeEach(() => {
    page = new Ng2ProjcetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
