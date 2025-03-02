class ClickLike {
    selectorsList(){
        const selectors = {
            likeButton: "[data-cy='like']",
            hireButton: "[data-cy='money']"
        }
        return selectors
    }

    accessPage(){
        cy.visit('http://localhost:3000/')
    }

    clickLikeButton(){
        cy.get(this.selectorsList().likeButton).eq(0).click()
    }

    clickhireButton(){
        cy.get(this.selectorsList().hireButton).eq(0).click()
    }
}

export default ClickLike

