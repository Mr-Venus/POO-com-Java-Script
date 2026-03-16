// Título divisório do treino de objetos
console.log("\n" + "- ".repeat(6) + "Treino sobre objetos" + "- ".repeat(6) + "\n\n")

// Declarando um objeto
const usuario = {
    nome: "Diogo",
    idade: 21,
    curso: "Redes de Computadores",
    semestre: "2",
    matricula: true,
    materias: ["Arquitetura TCP/IP", "POO",
        "Cabeamento Estruturado", "Arquitetura de Computadores"]
}

// --- Acessando valores do objeto ---

// acessando nome
console.log(`Nome do Aluno: ${usuario.nome}\n`)

// acessando curso
console.log(`Curso do Aluno: ${usuario.curso}\n`)

// acessando vetor
console.log(`Disciplinas:\n`)
for (let i = 0; i<usuario.materias.length; i++) {
    console.log(`- ${usuario.materias[i]}\n`)
}

// Manipulando o objeto

// adicionando
usuario.formacoes = ["Técnico Integrado em Informatica - 2022"]

// alterando
usuario.semestre = 3

//removendo
delete usuario.materias[2]

// exibindo o objeto
console.log(usuario)
console.log("\n\n\n\n")

//----------------------------------------------------------------------------------------------------

// ~~ DESAFIOS ~~

/*  Comando 1: 
    --- O Relatório de Estoque ---
    Você recebeu um objeto de estoque (Ex: { teclado: 150, mouse: 80, monitor: 900 }).
    . Crie um código que use Object.entries() para transformar o objeto em um array de pares.
    . Use um loop para percorrer esses pares e exibir a frase: "O produto [NOME] custa [VALOR]".
    . Ao final, use Object.values() junto com um loop para calcular se a média de preço dos produtos
    é superior a 300.
*/


// Declarando minha função de estoque
function estoque() {
    // criando meu objeto
    const estoque = {
        teclado: 150,
        mouse: 80,
        monitor: 900
    }
    // Declaração de variáveis
    let total = 0
    let arrayValores = Object.values(estoque) // armazenando os valores
    let arrayEstoque = Object.entries(estoque) // transformando o objeto em array

    // Loop para percorrer e apresentar ao usuário a lista de itens e seus preços
    for (let i = 0; i < arrayEstoque.length; i++) {
        console.log(`O produto -> ${arrayEstoque[i][0]} custa: ${arrayEstoque[i][1]}R$.`)
    }

    // Loop para realizar o somatório dos valores dos produtos
    for (let i = 0; i < arrayValores.length; i++) {
        total += arrayValores[i]
    }

    // Exibição na tela do valor total
    console.log("-" .repeat(40) + `\nO valor total do nosso estoque é de: ${total}R$ \n` + "-" .repeat(40))
}

/*  Comando 2:
    --- O Sistema de Check-in ---
    Crie um array chamado hospedes que contenha 3 objetos. Cada objeto deve ter as propriedades nome e
    estaPresente (booleano).
    . Use um loop para percorrer o array.
    . Para cada hóspede, verifique se a propriedade estaPresente é true.
    . Se for verdadeiro, exiba: 'Seja bem-vindo, [NOME]!'.
    . Se for falso, exiba: 'Aguardando o hóspede [NOME]'."
*/

function checkIn() {
    // definição dos hospedes do sistema
    let hospedes = [
        {
            nome: `Juca`,
            estaPresente: true
        },
        {
            nome: `Larissa`,
            estaPresente: false
        },
        {
            nome: `Amanda`,
            estaPresente: true
        }
    ]

    // Loop para percorrer o array
    for (let i = 0; i < hospedes.length; i++) {
        // verificação e exibição
        if (hospedes[i].estaPresente == true) {
            console.log(`Seja bem-vindo(a), ${hospedes[i].nome}!`)
        } else {
            console.log(`Aguardando o(a) hóspede ${hospedes[i].nome}.`)
        }
    }
}


/*  Comando 3: 
    --- O Analista de Redes Sociais --- 
    Você recebeu um objeto que representa as curtidas de uma foto em diferentes dias: const curtidas =
    { segunda: 150, terca: 120, quarta: 300, quinta: 80 };
    . Use o método Object.values() para obter apenas os números de curtidas em um array.
    . Use um loop para somar todas as curtidas desse array.
    . Ao final, use um if/else para mostrar uma mensagem: Se a soma for maior que 500, exiba
    'Postagem Popular!'. Caso contrário, exiba 'Postagem Comum'."
*/

function analista() {
    const curtidas =
    { 
        segunda: 150,
        terca: 120,
        quarta: 300,
        quinta: 80 
    }

    let curtidasValores = Object.values(curtidas)
    let totalCurtida = 0

    for (let i = 0; i < curtidasValores.length; i++) {
        totalCurtida += curtidasValores[i]
    }
    if (totalCurtida > 500)
        console.log(`Post é muito popular! Ele tem ${totalCurtida}💖!\n`)
    else
        console.log(`Postagem Comum. Apresenta apenas ${totalCurtida}❤️\n`)
}

//----------------------------------------------------------------------------------------------------
// Chamando as funções:
console.log("\n" + "- ".repeat(6) + "Iniciando os Desafios!" + "- ".repeat(6) + "\n\n")
console.log("~~~ Estoque De Produtos ~~~\n")
estoque()
console.log("\n~~~ Check IN ~~~\n")
checkIn()
console.log("\n~~~ Analista De Redes Sociais ~~~\n")
analista()