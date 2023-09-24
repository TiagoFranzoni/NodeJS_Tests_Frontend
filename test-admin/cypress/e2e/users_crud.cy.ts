describe("Users CRuD", () => {

    beforeEach(() => {
        cy.task('db:erase');
        cy.visit('http://localhost:5173');
    });

    afterEach(() => {
        cy.get('.css-1l0huk-RaLoadingIndicator-root').click();
    });

    it("Não deve haver usuários cadastrados", () =>{
        cy.contains("No User yet.");
    })

    it("Deve listar todos os usuários", () => {
        for (let i = 1; i <= 2; i++) {
            cy.task("db:create:users", {
                "name": "João dos santos",
                "email": "toaodossantos@email.com",
                "password":"js123456"
            });
        };
        cy.contains("toaodossantos@email.com")
    });


    it("Deve criar um usuário - botão ENTER", () => {
        cy.get('.RaCreateButton-root').click();
        cy.get('#name').type("João dos santos");
        cy.get('#email').type("JoãoSantos@email.com");
        cy.get('#password').type("js123456{enter}");
        
        //validacao
        cy.contains("Element created");
        cy.visit('http://localhost:5173');
        cy.contains("JoãoSantos@email.com");
    });
    

    it("Deve criar um usuário - botão SAVE", () => {
        cy.get('.RaCreateButton-root').click();
        cy.get('#name').type("João dos santos");
        cy.get('#email').type("JoãoSantos@email.com");
        cy.get('#password').type("js123456");
        cy.get('.css-t039ty-MuiButtonBase-root-MuiButton-root-RaSaveButton-root').click();

        //validacao
        cy.contains("Element created");
        cy.visit('http://localhost:5173');
        cy.contains("JoãoSantos@email.com");
    });
    

    it("Deve atualizar um usuário", () => {
            cy.task("db:create:users", {
                    "name": "João dos santos",
            "email": "toaodossantos@email.com",
            "password":"js123456"
        });
        cy.get('.MuiTableBody-root > :nth-child(1)').click();
        cy.get('#name').clear().type("João Francisco dos santos");
        cy.get('#email').clear().type("joaofs@email.com");
        cy.get('#password').clear().type("jfs123456");
        cy.get('.css-t039ty-MuiButtonBase-root-MuiButton-root-RaSaveButton-root').click();

        // validacao
        cy.contains("Element updated");
        cy.get('.css-1l0huk-RaLoadingIndicator-root').click();
        cy.contains("toaodossantos@email.com");
    });


    it("Deve remover um usuário", () => {
        cy.task("db:create:users", {
            "name": "João dos santos",
            "email": "toaodossantos@email.com",
            "password":"js123456"
        });

        cy.get('.MuiTableBody-root > :nth-child(1)').click();
        cy.get('.ra-delete-button').click();

        // validacao
        cy.contains("Element deleted");
    });

});
