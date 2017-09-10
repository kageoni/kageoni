import { KageoniPage } from './app.po';

describe('kageoni App', () => {
  let page: KageoniPage;

  beforeEach(() => {
    page = new KageoniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
