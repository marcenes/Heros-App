class NotLogged{
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

    clickLike(){
        cy.get(this.selectorsList().likeButton).eq(0).click()
    }

    clickHire(){
        cy.get(this.selectorsList().hireButton).eq(0).click()
    }


}

export default NotLogged