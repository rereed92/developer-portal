describe('Home', () => {
  context('Pre Login', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('redirects to the login page', () => {
      cy.url('/login');
      cy.get('.login');
    });

    it('redirects to the home page after login', () => {
      cy.get('input[type="email"]').type('test@test.com');
      cy.get('input[type="password"]').type('hunter2');
      cy.get('form').submit();
      cy.url('/');
    });
  });
});
