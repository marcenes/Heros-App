class editHero {
    selectorsList() {
        const selectors = {
            editHeroButton: "[data-cy='pencil']",
            nameField: "[data-cy='nameInput']",
            priceField: "[data-cy='priceInput']",
            fansField: "[data-cy='fansInput']",
            savesField: "[data-cy='savesInput']",
            powerField: "[data-cy='powersSelect']"
        }
        return selectors
    }

    clickEditHero(){
        cy.get(this.selectorsList().editHeroButton).eq(0).click()
    }

    editingHero(){
        cy.get(this.selectorsList().nameField).clear().type('The Hunter')
        cy.get(this.selectorsList().priceField).clear().type(20)
        cy.get(this.selectorsList().fansField).clear().type(10)
        cy.get(this.selectorsList().savesField).clear().type('10')
        cy.get(this.selectorsList().powerField).select('Super Speed')
    }


}

export default editHero