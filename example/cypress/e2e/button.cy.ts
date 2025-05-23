// https://docs.cypress.io/api/introduction/api.html

describe('button', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('checks for buttons and button text', () => {
    cy.contains('h2[data-cy=buttons]', 'Buttons');

    cy.get('[data-cy=content]').find('button[class*=_primary]').first().as('primaryButton');
    cy.get('[data-cy=content]').find('button[class*=_secondary]').first().as('secondaryButton');
    cy.get('[data-cy=content]').find('button[disabled]').first().as('disabledButton');

    // prefix button
    cy.get('[data-cy=content]')
      .find('button > svg[class^=_rui-icon_] + span')
      .first()
      .parent('button')
      .as('prefixedButton');

    // suffix button
    cy.get('[data-cy=content]')
      .find('button > span + svg[class^=_rui-icon_]')
      .first()
      .parent('button')
      .as('suffixedButton');

    // primary buttons should be clickable
    cy.get('@primaryButton').click();
    cy.get('@primaryButton').contains('1');
    cy.get('@primaryButton').dblclick();
    cy.get('@primaryButton').contains('3');
    cy.get('@primaryButton').find('span[class*=_label]');

    // disabled buttons not emit click
    cy.get('@disabledButton').should('be.disabled');
    cy.get('@disabledButton').contains('0');
  });
});
