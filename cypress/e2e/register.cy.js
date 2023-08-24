const userName = 'GameCattt';
const email = 'test_123@mail.ru';

describe('Регистрация', () => {
    beforeEach(() => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/delete-user',
            body: { email },
        });

        cy.visit('http://localhost:3001/signup');
    });

    it('Успешная регистрация', () => {
        cy.get('#nickname-input').type(userName);
        cy.get('#email-input').type(email);
        cy.get('#password-input').type('paswrd');
        cy.contains('Зарегистрироваться').click();
        cy.contains('Аккаунт').should('exist').click();
        cy.contains('Выйти из аккаунта').click();

        cy.visit('http://localhost:3001/signup');
        cy.get('#nickname-input').type(userName);
        cy.get('#email-input').type(email);
        cy.get('#password-input').type('paswrd');
        cy.contains('Зарегистрироваться').click();
        cy.get('.auth-form__error-msg').should('exist');
    });

    it('Ошибка регистрации', () => {
        cy.get('#nickname-input').focus().blur();
        cy.contains('Поле обязательно').should('exist');
        cy.get('#nickname-input').type('a').blur();
        cy.contains('Слишком короткое значение').should('exist');
        cy.get('#nickname-input').type('123').blur();
        cy.contains('Некорректный формат').should('exist');

        cy.get('#email-input').focus().blur();
        cy.contains('Поле обязательно').should('exist');
        cy.get('#email-input').type('test@test.').blur();
        cy.contains('Некорректный формат').should('exist');

        cy.get('#password-input').focus().blur();
        cy.contains('Поле обязательно').should('exist');
        cy.get('#password-input').type(`p`).blur();
        cy.contains('Слишком короткое значение').should('exist');
        cy.get('#password-input').clear().type(`passw`).blur();
        cy.contains('Слишком короткое значение').should('exist');
    });
});
