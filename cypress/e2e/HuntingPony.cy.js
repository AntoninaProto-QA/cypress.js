
describe('Тестирование HuntingPony', function () {
    
    it('Создание заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[href="/collection/odezhda"] > .banner-list__item-title').click();
        cy.get('[data-product-id="338937225"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1')
        .click();
        cy.intercept('POST', '**/cart.json').as('cart.json');
        cy.intercept('POST', '**calculate.json').as('calculate.json');
        cy.wait(5000);
        cy.get('.add-cart-counter__btn-label').trigger('mouseover').click();
        cy.wait('@cart.json');
        cy.wait('@calculate.json');
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.add-cart-counter__detail').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа');
                
        })
})

