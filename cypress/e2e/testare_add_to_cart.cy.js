describe('SauceDemo Login and Add Items to Cart', () => {
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
  
    it('should log in and add all items to cart', () => {
      // Acceseaza pagina de login
      cy.visit('https://www.saucedemo.com');
  
      // Introdu numele de utilizator si parola
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
  
      // Apasa butonul de login
      cy.get('#login-button').click();
  
      // Verifica daca URL-ul contine 'inventory.html'
      cy.url().should('include', 'inventory.html');
  
      // Gaseste toate elementele cu clasa 'inventory_item'
      cy.get('.inventory_item').each(($item) => {
        // Obtine numele articolului
        const itemName = $item.find('.inventory_item_name').text();
  
        // Adauga la cos
        cy.wrap($item).find('.btn_inventory').click();
        cy.log(`Added ${itemName} to cart.`);
      });
    });
  });
  