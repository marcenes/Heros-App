class userLogin {
    selectorsList () {
        const selectors = { 
            emailField: "[data-cy='email']",
            passwordField: "[data-cy='password']"
        }
        return selectors
    }

    accessPage(){
        cy.visit('http://localhost:3000/')
    }

    userLogin(username, password){
        cy.get(this.selectorsList().emailField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
    }
}

export default userLogin