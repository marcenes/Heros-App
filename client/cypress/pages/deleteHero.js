class DeleteHero{
    selectorsList(){
        const selectors = {
            deleteButton: "[data-cy='trash']",
        }
        return selectors
    }

    accessPage(){
        cy.login('admin@test.com', 'test123')
        cy.visit('/')
    }

    selectHeroDelete(){
        cy.contains('Jorge Alex').should('exist')
        cy.get(this.selectorsList().deleteButton).eq(11).click()
    }

    confirmDeleteHero(){
        cy.contains('Yes').should('exist')
        cy.get('button').contains('Yes').click()
    }

    checkDeletedHero(){
        cy.contains('Jorge Alex').should('not.exist')
    }

}

export default DeleteHero