import { testingConstants } from '../../src/utils/Constants';
import { genres } from '../../__mocks__/data';
import movieMockData from '../fixtures/movie.json';

describe('Movie actions', () => {
  const testingTitle = (Math.random() + 1).toString(36).substring(4);

  it('should create the movie', () => {
    cy.visit('/');
    cy.getByTestId(testingConstants.addMovieButton).click();
    cy.getByInputName('title').type(movieMockData.title);
    cy.getByInputName('release_date').type(movieMockData.release_date);
    cy.getByInputName('poster_path').type(movieMockData.poster_path);
    cy.getByInputName('vote_average').type(movieMockData.vote_average);
    cy.getByTestId(testingConstants.genresOptionsInput).click();
    cy.get('label').contains(genres[0]).click();
    cy.getByInputName('runtime').type(movieMockData.runtime);
    cy.getByTestId(testingConstants.movieOverviewTextarea).type(movieMockData.overview);
    cy.getByTestId(testingConstants.submitMovieForm).click();
    cy.get('div').contains(movieMockData.title).should('exist');
  });

  it('should search movie and edit it', () => {
    cy.visit('/');
    findMovieByTitle(movieMockData.title);
    cy.getByTestId(testingConstants.editMovieOption).click();
    cy.getByInputName('title').type(testingTitle);
    cy.getByTestId(testingConstants.submitMovieForm).click();
    cy.get('div').contains(testingTitle).should('exist');
  });

  it('should search movie and delete it', () => {
    cy.visit('/');
    findMovieByTitle(testingTitle);
    cy.getByTestId(testingConstants.removeMovieOption).click();
    cy.getByTestId(testingConstants.confirmRemoveMovie).click();
    cy.getByTestId(testingConstants.moviesList).should('not.include.text', movieMockData.title);
  });
});

const findMovieByTitle = (title) => {
  cy.getByTestId(testingConstants.searchHeaderInput).type(title);
  cy.getByTestId(testingConstants.searchSubmitButton).click();
  cy.getByTestId(testingConstants.moviesList).children().first().trigger('mouseover');
  cy.getByTestId(testingConstants.movieItemOptions).click();
};
