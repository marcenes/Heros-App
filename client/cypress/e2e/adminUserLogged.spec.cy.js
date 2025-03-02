import userLogin from "../pages/userLogin"
import userData from "../fixtures/userData.json"
import editHero from "../pages/editHero"
import CreateANewHero from "../pages/createHero"
import DeleteHero from "../pages/deleteHero"

const userlogin = new userLogin()
const edithero = new editHero()
const createAHero = new CreateANewHero()
const deletehero = new DeleteHero()


describe('Admin User Login', () => {
    it('Login Fail ', () => {
        userlogin.accessPage()
        cy.contains('Login').should('exist')
        cy.get('button').contains('Login').click()
        userlogin.userLogin(userData.loginFail.username, userData.loginFail.password)
        cy.get('button').contains('Sign in').click()
        cy.contains('Invalid email or password').should('exist')
        
    })


    it('Login Success', () => {
        userlogin.accessPage()
        cy.contains('Login').should('exist')
        cy.get('button').contains('Login').click()
        userlogin.userLogin(userData.adminUser.userName, userData.adminUser.password)
        cy.get('button').contains('Sign in').click()
        cy.contains('Logout').should('exist')
    })


    it('Clicking on Edit Hero', () =>{
        userlogin.accessPage()
        cy.contains('Login').should('exist')
        cy.get('button').contains('Login').click()
        userlogin.userLogin(userData.adminUser.userName, userData.adminUser.password)
        cy.get('button').contains('Sign in').click()
        cy.contains('Create New Hero').should('exist')
        edithero.clickEditHero()
        cy.contains('Name').should('exist')
    })

    it('Editing a Hero', () => {
        cy.login('admin@test.com', 'test123')
        cy.visit('/')
        edithero.clickEditHero()
        edithero.editingHero()
        cy.get('button').contains('Submit').click()
        cy.contains('The Hunter').should('exist')

    })

    it('Clicking on create a new hero', () => {
        createAHero.accessPage()
        createAHero.clickingCreateHero()
        cy.contains('Name').should('exist')
    
    })

    it('Creating a New Hero', () => {
        createAHero.accessPage()
        createAHero.clickingCreateHero()
        cy.contains('Name').should('exist')
        createAHero.createHero(userData.createHero.name, userData.createHero.price, userData.createHero.fans, userData.createHero.saves)
        createAHero.selecPower()
        createAHero.insertImage()
        createAHero.clickSubmit()
        cy.contains('Jorge Alex').should('exist')
    })

    it('Deleting a Hero', () => {
        deletehero.accessPage()
        deletehero.selectHeroDelete()
        deletehero.confirmDeleteHero()
        deletehero.checkDeletedHero()
    } )

})