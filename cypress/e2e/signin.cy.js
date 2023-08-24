const userName = 'GameCattt';
const email = 'test_123@mail.ru';

describe('Регистрация', () => {
    beforeEach(() => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/delete-user',
            body: { email },
        });
    });

    it('Успешный вход', () => {
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
    });

    it('Ошибка входа', () => {
        cy.visit('http://localhost:3001/signin');

        cy.get('#email-input').click();
        cy.get('#root').click();
        cy.contains('Поле обязательно').should('exist');
        cy.get('#email-input').type('test@test.');
        cy.get('#root').click();
        cy.contains('Некорректный формат').should('exist');

        cy.get('#password-input').focus().blur();
        cy.contains('Поле обязательно').should('exist');
        cy.get('#password-input').type(`p`).blur();
        cy.contains('Слишком короткое значение').should('exist');
        cy.get('#password-input').clear().type(`passw`).blur();
        cy.contains('Слишком короткое значение').should('exist');
    });
});
