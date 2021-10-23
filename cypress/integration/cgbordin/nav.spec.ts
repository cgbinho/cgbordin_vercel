/// <reference types="cypress" />
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

export const NavTests = (() => {
  describe('Navigation Tests', () => {
    beforeEach(() => cy.visit('/'));

    it('should display navbar', () => {
      cy.getByTestId('nav-home');
    });

    it('should have a language Selection menu', () => {
      cy.get('.dropdown_button');
    });

    it('should select a different language from language selection menu', () => {
      cy.get('.dropdown_button').click();
    });
  });
})();

// describe('Nav Menus', () => {
//   // For desktop view
//   context('720p resolution', () => {
//     beforeEach(() => {
//       /**
//        * Run these tests as if in a desktop browser,
//        * with a 720p monitor
//        */
//       cy.viewport(1280, 720);
//     });
//     describe('When you visit home', () => {
//       it('Should visit home page', () => {
//         cy.visit('/');
//       });
//       describe('nav', () => {
//         it('Should navigate to About page', () => {
//           cy.get('[data-cy=nav-item]').contains('About').click();
//           cy.url().should('include', '/about/');
//         });
//       });
//     });
//   });
//   context('iphone-5 resolution', () => {
//     beforeEach(() => {
//       /**
//        * Run these tests as if in a desktop browser,
//        * with a 720p monitor
//        */
//       cy.viewport('iphone-5');
//     });
//     describe('When you visit home', () => {
//       it('Should visit home page', () => {
//         cy.visit('/');
//       });
//       describe('Mmenu', () => {
//         it('Should open the mmenu', () => {
//           cy.get('[data-cy=mmenu-btn]').click();
//         });
//         describe('nav', () => {
//           it('Should navigate to About page', () => {
//             cy.get('[data-cy=nav-item]').contains('About').click();
//             cy.url().should('include', '/about/');
//           });
//         });
//       });
//     });
//   });
// });
