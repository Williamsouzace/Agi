describe('Teste automatizado Agi', () => {

    beforeEach(function () {
        cy.visit('/') //Visitando a pagina princiapl em cada teste
    })

    it('Pesquisa Palavra-chave', () => {
        let keyword = 'tecnologia' //Definindo o que vai ser pesquisado
        cy.search(keyword) //Chamando o comando para inserir pesquisa
        cy.get('.archive-title > span').should('be.visible', keyword) //Verificando se a pesquisa foi realizada
        cy.get('h2').first().contains(keyword) //verificando se a ppesquisa contem o texto inserido
    })
    it('Pesquisa por Data', () => {
        let keyword = '2022' //Definindo o que vai ser pesquisado
        cy.search(keyword) //chamando o comando para inserir pesquisa
        cy.get('.archive-title > span').should('be.visible', keyword) //Verificando se a pesquisa foi realizada
        cy.get('h2').first().contains(keyword) //Verificando se a ppesquisa contem o texto inserido
    })
    it('Pesquisa por categoria', () => {
        let keyword = '2022' //Definindo o que vai ser pesquisado
        cy.search(keyword) //Chamando o comando para inserir pesquisa
        cy.get('a[rel="category tag"]').contains("Home").click() //Clicando na categoria home
        cy.get('.archive-title > span').should('be.visible', 'Home') //Verificando se a pesquisa po categoria foi realizada
    })
    it('Pesquisa por conteudo inexistente', () => {
        let keyword = 'Cypress' //Definindo o que vai ser pesquisado
        cy.search(keyword) //Chamando o comando para inserir pesquisa
        cy.get('h1').should('have.text', 'Nenhum resultado') //Verificando se a pesquisa retorna o texto "Nenhum resultado"
    })
    it('Pesquisa vazia', () => {
        let keyword = ' ' //Definindo o que vai ser pesquisado
        cy.search(keyword) //Chamando o comando para inserir pesquisa
        cy.get('h1').should('have.text', 'Resultados da busca por: ' + keyword) //Verificando se a pesquisa veio vazia
    })
    it('Acessar segunda', () => {
        let keyword = '2022' //Definindo o que vai ser pesquisado
        cy.search(keyword) //Chamando o comando para realizar pesquisa
        cy.get('.archive-title > span').should('have.text', keyword) //Verificando se a pesquisa foi realizada
        cy.get('a[class="page-numbers"]').first().click()
        cy.url().should('eq', 'https://blogdoagi.com.br/page/2/?s=2022') //Verificando pela url 
    })
    it('Acessar última pagina', () => {
        let keyword = '2022' //Definindo o que vai ser pesquisado
        cy.search(keyword) //Chamando o comando para realizar pesquisa
        cy.get('span[class="meta-nav"]').last().should('have.text', 'mais velho') //Verificando se contém o texto "mais velho"ao lado de paginações 
        cy.get('a[class="page-numbers"]').last().click() //Clicando na útima pagina
        cy.get('span[class="meta-nav"]').last().should('not.contain', 'mais velho') //Verificando se não contem o texto "mais velho" ao lado de paginações
    })
    it('Acessar menu institucional', () => {
        cy.get('#overlay-open').click() //Clicando no menu lateral
        cy.get('#menu-principal-1 > .menu-item-2690 > a').click()
        cy.url().should('eq', 'https://blogdoagi.com.br/category/nosso-agi/institucional/') //Verificando pela url
        cy.contains(`h1`, `Categoria: Institucional`).should('be.visible') //Verificando pela inteface
    })
    it('Acessar menu Produtos', () => {
        cy.get('#overlay-open').click() //Clicando no menu lateral
        cy.get('#menu-principal-1 > .menu-item-584 > a').click() //clicando no menu Produtos
        cy.url().should('eq', 'https://blogdoagi.com.br/category/nosso-agi/produtos/')//Verificando pela url
        cy.contains(`h1`, `Categoria: Produtos`).should('be.visible') //Verificando pela inteface
    })
    it('Acessar menu Serviços', () => {
        cy.get('#overlay-open').click() //Clicando no menu lateral
        cy.get('#menu-principal-1 > .menu-item-583 > a').click() //clicando no menu Serviços
        cy.url().should('eq', 'https://blogdoagi.com.br/category/nosso-agi/servicos/') //Verificando pela url
        cy.contains(`h1`, `Categoria: Serviços`).should('be.visible') //Verificando pela inteface
    })
    it('Acessar menu finanças', () => {
        cy.get('#overlay-open').click() //Clicando no menu lateral
        cy.get('#menu-principal-1 > .menu-item-2684 > a').click() //clicando no menu finanças
        cy.url().should('eq', 'https://blogdoagi.com.br/category/suas-financas/') //Verificando pela url
        cy.contains(`h1`, `Categoria: Suas finanças`).should('be.visible') //Verificando pela inteface
    })
    it('Acessar menu segurança', () => {
        cy.get('#overlay-open').click() //Clicando no menu lateral
        cy.get('#menu-principal-1 > .menu-item-572 > a').click() //clicando no menu Segurança
        cy.url().should('eq', 'https://blogdoagi.com.br/category/sua-seguranca/') //Verificando pela url
        cy.contains(`h1`, `Categoria: Sua segurança`).should('be.visible') //Verificando pela inteface   
    })
    it('Acessar menu carreira', () => {
        cy.get('#overlay-open').click() //Clicando no menu lateral
        cy.get('#menu-principal-1 > .menu-item-579 > a').click() //Clicando no menu Sua carreira
        cy.url().should('eq', 'https://blogdoagi.com.br/category/seu-sucesso/sua-carreira/') //Verificando pela url
        cy.contains(`h1`, `Categoria: Sua carreira`).should('be.visible') //Verificando pela inteface
    })
    it('Acessar menu Inscreva-se no nosso canal!', () => {
        cy.get('#overlay-open').click() //Clicando no menu lateral
        cy.get('#menu-principal-1 > .menu-item-type-post_type > a').click() //Clicando no menu Inscreva-se no nosso canal!
        cy.url().should('eq', 'https://blogdoagi.com.br/campanhas/') //Verificando pela url
        cy.contains('h1', 'Inscreva-se no nosso canal!').should('be.visible') //Verificando pela inteface
    })
    it('Acessar menu Seus investimentos', () => {
        cy.get('#overlay-open').click() //Clicando no menu lateral
        cy.get('#menu-principal-1 > .menu-item-570 > a').click() //Clicando no menu Seus investimentos
        cy.url().should('eq', 'https://blogdoagi.com.br/category/seus-investimentos/') //Verificando pela url
        cy.contains(`h1`, `Categoria: Seus investimentos`).should('be.visible') //Verificando pela inteface 
    })
})