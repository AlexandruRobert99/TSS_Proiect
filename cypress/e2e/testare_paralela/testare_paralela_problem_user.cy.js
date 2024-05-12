describe('SauceDemo - Checkout Flow for Problem User', () => {
    let startTime;

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

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

    afterEach(() => {
        const endTime = new Date().getTime();
        const totalTime = endTime - startTime;
        cy.log(`Test run time: ${totalTime / 1000} seconds.`);
    });

    it('should log in, add items to cart, and complete checkout for problem_user', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('problem_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.url().should('include', 'inventory.html');

        // Adauga toate produsele in cos
        cy.get('.inventory_item').each(($item) => {
            const itemName = $item.find('.inventory_item_name').text();
            cy.wrap($item).find('.btn_inventory').click();
            cy.log(`Added ${itemName} to cart.`);
        });

        // Navigheaza la cos si incepe procesul de checkout
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();
        cy.url().should('include', 'checkout-step-one.html');

        // Completeaza detaliile de checkout
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Doe');
        cy.get('#postal-code').type('12345');
        cy.get('#continue').click();
        cy.url().should('include', 'checkout-step-two.html');

        // Finalizeaza comanda
        cy.get('#finish').click();
        cy.url().should('include', 'checkout-complete.html');
        cy.log('Checkout complete for problem_user.');
    });
});
