import userData from "../fixtures/userData.json"
import userLogin from "../pages//userLogin"
import ClickLike from "../pages/clicckingLike"

const userlogin = new userLogin()
const clicklike = new ClickLike()


describe('Usuário Normal Logado', () => {
    
    it('Login Fail', () => {
        userlogin.accessPage()
        cy.get('button').contains('Login').click()
        userlogin.userLogin(userData.loginFail.username, userData.loginFail.password)
        cy.get('button').contains('Sign in').click()
        cy.contains('Invalid email or password').should('exist')

    })
    
    
    it('Login Success', () => {
        userlogin.accessPage()
        cy.get('button').contains('Login').click()
        userlogin.userLogin(userData.normalUser.username, userData.normalUser.password)
        cy.get('button').contains('Sign in').click()
        cy.contains('Logout').should('exist')
    })

    
    
    it('Clicking on like hero should increase their fans count', () => {
        clicklike.accessPage()
        cy.get('button').contains('Login').click()
        userlogin.userLogin(userData.normalUser.username, userData.normalUser.password)
        cy.get('button').contains('Sign in').click()
        cy.contains('Logout').should('exist')
        cy.get("[data-cy='fans']").invoke('text').then((initialFansText) => {
            const initialFansCount = parseInt (initialFansText, 10)
            clicklike.clickLikeButton()
            cy.get("[data-cy='fans']").invoke('text').should((newFansText) => {
                const newFansCount = parseInt (newFansText, 10)
                expect(newFansCount).to.equal(initialFansCount)
            })

            
        })

    })

    
    it('Clicking on hire should increase their saves count', () => {
        clicklike.accessPage()
        cy.get('button').contains('Login').click()
        userlogin.userLogin(userData.normalUser.username, userData.normalUser.password)
        cy.get('button').contains('Sign in').click()
        cy.contains('Logout').should('exist')
        cy.get("[data-cy='saves']").invoke('text').then((initialSaveText) =>{
            const initialSaveCount = parseInt(initialSaveText, 10)
            clicklike.clickhireButton()
            cy.contains('Hire Hero?').should('exist')
            cy.get('button').contains('Yes').click()
            cy.get("[data-cy='saves']").invoke('text').then((newSaveText) => {
                const newSaveCount = parseInt(newSaveText, 10)
                expect(newSaveCount).to.equal(initialSaveCount)
            })
        })
    })

    
})