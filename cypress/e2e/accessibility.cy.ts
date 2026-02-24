describe('Accessibility', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('should have no accessibility violations on the full page', () => {
    cy.checkA11y();
  });

  it('should have no accessibility violations in the features section', () => {
    cy.checkA11y('#features');
  });

  it('should have no accessibility violations in the contact form', () => {
    cy.checkA11y('#contact');
  });

  it('should have no accessibility violations in the footer', () => {
    cy.checkA11y('footer');
  });
});
