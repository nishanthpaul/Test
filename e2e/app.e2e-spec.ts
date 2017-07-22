import { SeminarPage } from './app.po';

describe('seminar App', () => {
  let page: SeminarPage;

  beforeEach(() => {
    page = new SeminarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
