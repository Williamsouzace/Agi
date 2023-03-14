Cypress.Commands.add('search', (
     keyword = undefined // definindo uma variável indefinida
) => {
     cy.get('#overlay-open').click() //Clicando no menu lateral
     cy.get('.mobile-search > .search-form > label > .search-field').click() //Clicando no campo de inserir texto
          .type(keyword + '{enter}') // inserindo nome na variável e Submetendo a pesquisa com "Enter"
})


