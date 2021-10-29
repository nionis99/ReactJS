import { ROUTES, testingConstants } from '../../src/utils/Constants';

describe('Routing', () => {
  const testingSearchValue = 'Avengers';
  it('should show search route and search by query params', () => {
    cy.visit('/');
    cy.url().should('include', ROUTES.search);

    cy.getByTestId(testingConstants.searchHeaderInput).type(testingSearchValue);
    cy.getByTestId(testingConstants.searchSubmitButton).click();
    cy.url().should('include', `${ROUTES.search}/${testingSearchValue}`);
    cy.getByTestId(testingConstants.searchHeaderInput).should('contain.value', testingSearchValue);
  });
});
