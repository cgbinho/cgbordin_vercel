/// <reference types="cypress" />
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

export const NavTests = (() => {
  describe('Desktop Navigation Tests', () => {
    // For desktop view
    context('desktop resolution', () => {
      // beforeEach(() => cy.visit('/'));
      beforeEach(() => {
        /**
         * Run these tests as if in a desktop browser,
         * with a 720p monitor
         */
        cy.viewport(1920, 1080);
        cy.visit('/articles');
      });

      it('should display articles page', () => {
        cy.url().should('include', '/articles');
      });

      it('should display an article page', () => {
        cy.get('.article_list')
          .contains('a')
          .each(($a) => {
            const message = $a.text();
            expect($a, message).to.have.attr('href').contain('/articles');
          })
          .click();
      });
    });

    context('mobile resolution', () => {
      beforeEach(() => {
        cy.viewport('iphone-5');
        cy.visit('/articles');
      });

      it('should display articles page', () => {
        cy.url().should('include', '/articles');
      });

      it.only('should display an article page', () => {
        cy.get('.article_list')
          .contains('a')
          .each(($a) => {
            const message = $a.text();
            expect($a, message).to.have.attr('href').contain('/articles');
          })
          .click();
      });

      // it('should display hamburguer menu', () => {
      //   // cy.getByTestId('nav-home');
      //   cy.get("[aria-label='Burguer menu']");
      // });

      // it('should have a language Selection menu', () => {
      //   cy.get('.dropdown_button');
      // });

      // it('should select pt-Br from language selection menu', () => {
      //   cy.get('.dropdown_button').click();
      //   cy.get("[data-cy='language_pt-Br']").click();
      //   cy.contains('Início');
      // });

      // it('should select en-Us from language selection menu', () => {
      //   cy.get('.dropdown_button').click();
      //   cy.get("[data-cy='language_en-Us']").click();
      //   cy.contains('Home');
      // });
    });
  });
})();
