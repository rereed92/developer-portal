describe('Apps', () => {
  context('Pre Login', () => {
    beforeEach(() => {
      cy.visit('/apps');
    });

    it('redirects to the login page', () => {
      cy.url('/login');
      cy.get('.login');
    });

    it('redirects to the apps page after login', () => {
      cy.get('input[type="email"]').type('test@test.com');
      cy.get('input[type="password"]').type('hunter2');
      cy.get('form').submit();
      cy.url('/apps');
    });
  });

  context('Post Login', () => {
    beforeEach(() => {
      cy.visit('/apps');
      cy.get('input[type="email"]').type('test@test.com');
      cy.get('input[type="password"]').type('hunter2');
      cy.get('form').submit();
    });

    it('opens up the edit modal', () => {
      cy.get('button.application__link').first().click();
      cy.get('.modal');
    });
  });

  context('Edit Modal', () => {
    beforeEach(() => {
      cy.visit('/apps');
      cy.get('input[type="email"]').type('test@test.com');
      cy.get('input[type="password"]').type('hunter2');
      cy.get('form').submit();
      cy.get('button.application__link').first().click();
      cy.get('.modal');
    });

    it('closes the modal when clicking Discard', () => {
      cy.get('button[type="button"].edit__button').click();
      cy.get('.modal').should('not.exist');
    });

    it('edits the content in the modal when submitting the form', () => {
      cy.get('input[type="text"]').first().clear().type('Editing name field');
      cy.get('form').submit();
      cy.contains('Editing name field');
    });

    it('edits the content in the modal when clicking the submit button', () => {
      cy.get('input[type="text"]').first().clear().type('Editing name field2');
      cy.get('button[type="submit"].edit__button').click();
      cy.contains('Editing name field2');
    });
  });
});
