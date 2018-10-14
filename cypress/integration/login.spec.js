describe('Login', () => {
  context('Desktop', () => {
    beforeEach(() => {
      cy.visit('/login');
    });

    it('redirects to the login page when the details are not correct', () => {
      cy.get('input[type="email"]').type('test@test.com');
      cy.get('input[type="password"]').type('text');
      cy.get('form').submit();
      cy.url('/login');
    });

    it('redirects to the home page when the details are correct', () => {
      cy.get('input[type="email"]').type('test@test.com');
      cy.get('input[type="password"]').type('hunter2');
      cy.get('form').submit();
      cy.url('/');
    });
  });
});
