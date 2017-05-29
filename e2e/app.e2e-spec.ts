import { BuildoutPage } from './app.po';

describe('buildout App', () => {
  let page: BuildoutPage;

  beforeEach(() => {
    page = new BuildoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
