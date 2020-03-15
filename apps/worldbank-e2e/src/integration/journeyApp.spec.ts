import { getHeadingH1, getHeadingH2, getButton } from '../support/app.po';

describe('worldbank web app', () => {
  //@ts-ignore
  context('When user visit HomePage', () => {
    //@ts-ignore
    beforeEach(() => cy.visit('/'));
    it(`should display <h1> with a text "World Bank Application"`, () => {
      // Custom command example, see `../support/commands.ts` file
      // cy.login('my-email@something.com', 'myPassword');
      // Function helper example, see `../support/app.po.ts` file
      getHeadingH1().contains('World Bank Application');
    });

    it(`should display <h2> with a text "Continental Region"`, () => {
      getHeadingH2().contains('Continental Regions');
    });

    it('clicks the link "Europa y Asia Central"', ()=>{
      //@ts-ignore
      cy.contains(' Europa y Asia central').click();
    })
  });
  //@ts-ignore
  context('When user visit Region', ()=>{
    it(`should display <h2> with a text "Region"`, () => {
      getHeadingH2().contains('Region');
    });
    it('clicks the link "España"', ()=>{
      //@ts-ignore
      cy.contains(' España').click();
    })
  });
  //@ts-ignore
  context('When user visit Country', ()=> {
    it(`should display <h2> with a text "Country"`, ()=>{
      getHeadingH2().contains('Country: ');
    });

    it('clicks the button "Region" display content', ()=> {
      getButton().contains('Region').click();
    })

  })
});
