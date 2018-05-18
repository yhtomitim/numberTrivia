// https://docs.cypress.io/api/introduction/api.html

describe('Random Number Trivia App', () => {
  it('Visits the app root url', () => {
    cy.visit('http://number-trivia.herokuapp.com');
    cy.contains('h1', 'Number Trivia!');
  });
  it('clicks on the trivia link', () => {
    cy.get('[href="#/trivia"]')
      .click();
  });
  it('checks for initial number input then clears input', () => {
    cy.get('input')
      .should('have.value', '42')
      .clear();
  });
  it('gets a new trivia answer when a number is submitted', () => {
    cy.get('input')
      .type('45')
      .should('have.value', '45')
      .get('button')
      .click()
      .get('.views > p')
      .should('exist')
      .get('.views > p')
      .should('contain', '45');
  });
  it('clicks on the math trivia link', () => {
    cy.get('[href="#/math"]')
      .click();
  });
  it('checks for initial number input then clears input', () => {
    cy.get('input')
      .should('have.value', '32')
      .clear();
  });
  it('gets a new math trivia answer when a number is submitted', () => {
    cy.get('input')
      .type('18')
      .should('have.value', '18')
      .get('button')
      .click()
      .get('.views > p')
      .should('exist')
      .should('contain', '18');
  });
  it('clicks on the date trivia link', () => {
    cy.get('[href="#/date"]')
      .click();
  });
  it('checks for initial month and day input then clears both inputs', () => {
    cy.get('.form > :nth-child(2)')
      .should('have.value', '5')
      .clear()
      .get('.form > :nth-child(4)')
      .should('have.value', '13')
      .clear();
  });
  it('gets a new date trivia answer when a month and date are submitted', () => {
    cy.get('.form > :nth-child(2)')
      .type('7')
      .should('have.value', '7')
      .get('.form > :nth-child(4)')
      .type('12')
      .should('have.value', '12')
      .get('button')
      .click()
      .get('.views > p')
      .should('exist')
      .should('contain', '12')
      .get('.form > :nth-child(2)')
      .should('have.value', '7');
  });
});
