describe('SauceDemo - Add Items to Cart and Checkout', () => {
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
  
    it('should log in, add items to cart, and proceed to checkout', () => {
      // Acceseaza pagina de login
      cy.visit('https://www.saucedemo.com');
  
      // Introduce numele de utilizator si parola
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
  
      // Apasa butonul de login
      cy.get('#login-button').click();
  
      // Verifica daca URL-ul contine 'inventory.html'
      cy.url().should('include', 'inventory.html');
  
      // Gaseste toate elementele cu clasa 'inventory_item' si le adauga in cos
      cy.get('.inventory_item').each(($item) => {
        const itemName = $item.find('.inventory_item_name').text();
        cy.wrap($item).find('.btn_inventory').click();
        cy.log(`Added ${itemName} to cart.`);
      });
  
      // Navigheaza la cos
      cy.get('.shopping_cart_link').click();
  
      // Apasa butonul de checkout
      cy.get('#checkout').click();
  
      // Verifica URL-ul curent pentru a confirma pagina de checkout
      cy.url().should('include', 'checkout-step-one.html');
    });
  });
  