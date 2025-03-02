import NotLogged from "../pages/userNotlogged"
import userData from "../fixtures/userData.json"

const notlogged = new NotLogged()


describe('Usuário não Logado', () => {
    it('clicando em Like quando não logado', () => {
        notlogged.accessPage()
        notlogged.clickLike()
        cy.contains('You must log in to like.')
        cy.get('button').contains('Ok').click()
        cy.contains('You must log in to like.').should('not.exist')
    })

    it('Clicando em contratar não logado', () => {
        notlogged.accessPage()
        notlogged.clickHire()
        cy.contains('You must log in to hire this hero.')
        cy.get('button').contains('Ok').click()
        cy.contains('You must log in to hire this hero.').should('not.exist')
    })
})