//Funções | Inicio

function exibirArrays(array) {
    for(let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            console.log(array[i].join(' | '))
        } else {
            console.log("-" + array[i])
        }
        
    }
}

// --Comando 1:--
/*
Crie uma matriz para representar o resultado do jogo da velha abaixo:
                        X | O | O
                        X | X | O
                        X | 0 | X
*/

function jogoDaVelha() {
    let jogo = [
        ['X','0','0'],
        ['X','X','0'],
        ['X','0','X']
    ]

    exibirArrays(jogo)
    
}

// --Comando 2:--
/*
Crie um array chamado compras com 3 itens. Adicione mais um no final usando push, um no início
usando unshift e remova o segundo item. Mostre o array final.
*/

function compras() {
    let compras = [
        "Leite", "Açucar", "Farinha"
    ]

    console.log("lista de compras antes da adição: ")
    exibirArrays(compras)
    compras.push("Manteiga")
    //-----------------------
    compras.unshift("Ovos")
    console.log("-- -- -- --\nItens adicionados na lista de compras:")
    exibirArrays(compras)
    //-----------------------
    compras.splice(1,1)
    //-----------------------
    console.log("-- -- -- --\nLista de compras com o segundo item removido:")
    exibirArrays(compras)
}

// --Comando 3:--
/*
Dado um array de nomes: ['Ana', 'Bia', 'Carlos', 'Amanda']. Use um loop para percorrer
a lista e só mostre no console os nomes que começam com a letra 'A'
*/

function nomes() {
    let nomes = [
        "Ana", "Bia", "Carlos", "Amanda", "andreia"
    ]

    for(let i = 0; i < nomes.length; i++) {
        let comecaComA = nomes[i].toLocaleLowerCase().startsWith("a")
        if (comecaComA) {
            console.log(nomes[i])
        }
        
    }

}

// --Comando 4:--
/*
Crie um array de números: [2, 3, 1] e use apenas dois loops para imprimir os números n vezes,
de acordo com os valores contidos no array.
Saída experada:
2
2
3
3
3
1
*/

function exibeNumeros() {
    let valores = [2, 3, 1, 4, 5]

    valores.sort(function(a, b) {// sort é um metodo do js que consegue reorganizar os elementos de um
        return a-b //  array a partir de uma subtração de 2 elementos(a e b)
    })
    for(let i = 0; i < valores.length; i++) {
        for (let j = 0; j < valores[i]; j++) {
            console.log(valores[i])
        }
        
    }

}

//Funções | Fim

// CONSOLE LOGS | Inicio

console.log("------------------------------------------------------------------\n")
jogoDaVelha()
console.log("------------------------------------------------------------------\n")
compras()
console.log("------------------------------------------------------------------\n")
nomes()
console.log("------------------------------------------------------------------\n")
exibeNumeros()

// CONSOLE LOGS | Fim