class CreateANewHero { 
    selectorsList(){
        const selectors = {
            nameField: "[data-cy='nameInput']",
            priceField: "[data-cy='priceInput']",
            fansField: "[data-cy='fansInput']",
            savesField: "[data-cy='savesInput']",
            insertImageButton: "[type='file']",
            powersSelect: "[data-cy='powersSelect']"
        }
        return selectors
    }

    accessPage(){ 
        cy.login('admin@test.com', 'test123')
        cy.visit('/')
    }

    clickingCreateHero(){
        cy.get('button').contains('Create New Hero').click()
        cy.contains('Name').should('exist')
    }

    createHero(name, price, fans, saves){
        cy.get(this.selectorsList().nameField).type(name)
        cy.get(this.selectorsList().priceField).type(price)
        cy.get(this.selectorsList().fansField).type(fans)
        cy.get(this.selectorsList().savesField).type(saves)
    }
    
    selecPower(){
        cy.get(this.selectorsList().powersSelect).select('Fireball')
    }
    insertImage(){
        cy.get(this.selectorsList().insertImageButton).selectFile('gato.avif')
    }

    clickSubmit(){
        cy.get('button').contains('Submit').click()
    }
}

export default CreateANewHero