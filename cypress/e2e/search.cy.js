const userName = 'GameCattt';
const email = 'test_123@mail.ru';

beforeEach(() => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/delete-user',
        body: { email },
    });
});

it('Поиск фильма', () => {
    cy.visit('http://localhost:3001/signup');

    cy.get('#nickname-input').type(userName);
    cy.get('#email-input').type(email);
    cy.get('#password-input').type('paswrd');
    cy.contains('Зарегистрироваться').click();
    cy.contains('Аккаунт').should('exist').click();
    cy.contains('Выйти из аккаунта').click();

    cy.visit('http://localhost:3001/signin');

    cy.get('#email-input').type(email);
    cy.get('#password-input').type('paswrd');
    cy.contains('Войти').click();
    cy.contains('Аккаунт').should('exist');

    cy.visit('http://localhost:3001');

    cy.get('.header__nav-link[href="/movies"]').click();
    cy.get('.search__input').focus().type('a');
    cy.get('.search__btn').click();

    cy.get('.movies__title').should('contain', 'a');
});
