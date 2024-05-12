describe('SauceDemo - Full Checkout Flow', () => {
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
      const totalTime = endTime - startTime;
      cy.log(`Test run time: ${totalTime/1000} seconds.`);
    });
  
    it('should log in, add items to cart, and complete checkout', () => {
      // Acceseaza pagina de login
      cy.visit('https://www.saucedemo.com');
  
      // Introdu numele de utilizator si parola
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
  
      // Apasa butonul de login
      cy.get('#login-button').click();
  
      // Verifica daca URL-ul conține 'inventory.html'
      cy.url().should('include', 'inventory.html');
      cy.log('Login successful!');
  
      // Gaseste toate elementele cu clasa 'inventory_item' le adauga in cos
      cy.get('.inventory_item').each(($item) => {
        const itemName = $item.find('.inventory_item_name').text();
        cy.wrap($item).find('.btn_inventory').click();
        cy.log(`Added ${itemName} to cart.`);
      });
  
      // Navigheaza la cos
      cy.get('.shopping_cart_link').click();
  
      // Apasa butonul de checkout
      cy.get('#checkout').click();
      cy.url().should('include', 'checkout-step-one.html');
      cy.log('Navigated to checkout step one.');
  
      // Completeaza datele pentru checkout
      cy.get('#first-name').type('John');
      cy.get('#last-name').type('Doe');
      cy.get('#postal-code').type('12345');
      cy.get('#continue').click();
  
      // Verifica daca s-a ajuns la pasul 2 al checkout-ului
      cy.url().should('include', 'checkout-step-two.html');
      cy.log('Navigated to checkout step two.');
  
      // Finalizeaza comanda
      cy.get('#finish').click();
      cy.url().should('include', 'checkout-complete.html');
      cy.log('Checkout complete.');
    });
  });
  