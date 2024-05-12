describe('SauceDemo Login Tests', () => {
  let startTime;
  
  beforeEach(() => {
    
    Cypress.Commands.add('clearCache', () => {
        cy.window().then((win) => {
          if (win.caches) {
            win.caches.keys().then((cacheNames) => {
              cacheNames.forEach((cacheName) => {
                win.caches.delete(cacheName);
              });
            });
          }
        });
      });

      cy.clearCache();
      
    startTime = new Date().getTime();
  });

  // Afiseaza timpul total dupa fiecare test
  afterEach(() => {
    const endTime = new Date().getTime();
    const duration = endTime - startTime;
    cy.log(`Test duration: ${duration/1000} seconds.`);
  });

  it('should successfully log in with valid credentials', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', 'inventory.html');
  });

});
