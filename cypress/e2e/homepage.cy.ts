describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the hero section', () => {
    cy.get('h1').should('be.visible');
    cy.contains('Get in Touch').should('have.attr', 'href', '#contact');
  });

  it('displays the features section', () => {
    cy.contains('Features').should('be.visible');
    cy.contains('Built for Performance').should('be.visible');
  });

  it('displays the stats section', () => {
    cy.contains('By the Numbers').should('be.visible');
    cy.contains('99.9%').should('be.visible');
  });

  it('displays the testimonials section', () => {
    cy.contains('What People Are Saying').should('be.visible');
  });

  it('shows validation errors for empty form submission', () => {
    cy.contains('Send Message').click();
    cy.contains('Name is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
    cy.contains('Message is required').should('be.visible');
  });

  it('submits the contact form successfully', () => {
    cy.get('#name').type('Jane Smith');
    cy.get('#email').type('jane@example.com');
    cy.get('#company').type('Acme Inc');
    cy.get('#message').type(
      'Hello, I would like to discuss a project with your team.',
    );

    cy.contains('Send Message').click();
    cy.contains('Message sent successfully').should('be.visible');
  });
});
