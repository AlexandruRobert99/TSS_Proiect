describe('Saucedemo - 2 Useri Simultan', () => {

    let startTime;

    // Functie reutilizabila pentru autentificare
    const login = (username, password) => {
      cy.visit('https://www.saucedemo.com', { cache: false });
      cy.get('#user-name').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
    };

    // Functia de sesiune
  const loginSession = (username, password) => {
    cy.session([username, password], () => {
      login(username, password);
    });
  };

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
  
    // Test pentru primul utilizator
    it('should log in and checkout with standard_user', () => {
      login('standard_user', 'secret_sauce');
      cy.url().should('include', 'inventory.html');
  
      // Adauga toate elementele in cos
      cy.get('.inventory_item').each(($item) => {
        const itemName = $item.find('.inventory_item_name').text();
        cy.wrap($item).find('.btn_inventory').click();
        cy.log(`Added ${itemName} to standard_user's cart.`);
      });
  
      // Navigheaza la cos si incepe procesul de checkout
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').click();
      cy.url().should('include', 'checkout-step-one.html');
  
      // Completeaza datele de checkout
      cy.get('#first-name').type('John');
      cy.get('#last-name').type('Doe');
      cy.get('#postal-code').type('12345');
      cy.get('#continue').click();
      cy.url().should('include', 'checkout-step-two.html');
  
      // Finalizeaza checkout-ul
      cy.get('#finish').click();
      cy.url().should('include', 'checkout-complete.html');
      cy.log('Checkout complete for standard_user.');
    });
  
    // Test pentru al doilea utilizator
    it('should log in and checkout with problem_user', () => {
      login('problem_user', 'secret_sauce');
      cy.url().should('include', 'inventory.html');
  
      // Adauga toate elementele in cos
      cy.get('.inventory_item').each(($item) => {
        const itemName = $item.find('.inventory_item_name').text();
        cy.wrap($item).find('.btn_inventory').click();
        cy.log(`Added ${itemName} to problem_user's cart.`);
      });
  
      // Navigheaza la cos si incepe procesul de checkout
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').click();
      cy.url().should('include', 'checkout-step-one.html');
  
      // Completeaza datele de checkout
      cy.get('#first-name').type('John');
      cy.get('#last-name').type('Doe');
      cy.get('#postal-code').type('12345');
      cy.get('#continue').click();
      cy.url().should('include', 'checkout-step-two.html');
  
      // Finalizeaza checkout-ul
      cy.get('#finish').click();
      cy.url().should('include', 'checkout-complete.html');
      cy.log('Checkout complete for problem_user.');
    });
  });
  