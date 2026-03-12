// FUNCOES | inicio
// --Comando 1:--
/*
    1. Crie um programa que declare o nome de um carro, seu preço de custo (ex: 30000) e o lucro
    desejado da loja (ex: 5000). Some esses valores para chegar ao preço final de venda. Mostre no
    console uma frase como: 'O preço final do carro é: 35000'."
*/
function declaracao() {
    const car = "Uno de Escada"
    let lucro = 10000, preco = 30000
    let soma = lucro + preco
    return"-Carro: " + car + "\n-Preço: " + soma + "R$."
}
// function trocaValor(a, b) {
//     let troca = a
//     a = b
//     b = troca
//     return [a, b]
// }

// --Comando 2:--
/*
    2. Declare duas variáveis, canecaA com o valor "Café" e canecaB com o valor "Leite". Seu objetivo
    é trocar os conteúdos, de forma que a canecaA termine com "Leite" e a canecaB com "Café".
*/
function canecas() {
    let canecaA = "Café"
    let canecaB = "Leite"
    let troca = canecaA
    canecaA = canecaB
    canecaB = troca
    // [canecaA, canecaB] = trocaValor(canecaA, canecaB)
    return "As Canecas A e B, inicialmente preenchidas com Café e Leite, respectivamente, agora apresentam seus valores invertidos, sendo Caneca a: " + canecaA + " e Caneca b: " + canecaB
}

// --Comando 3:--
/*
    3. Declare três notas de um aluno (ex: 7, 8 e 9). Tente calcular a média somando as três e dividindo por
    3 na mesma linha.
*/
function notas() {
    let aluno = {
        nome: "Diogo",
        n1: 10,
        n2: 9,
        n3: 8
    }
    let media = (aluno.n1 + aluno.n2 + aluno.n3) / 3

    return "O aluno " + aluno.nome + " obteve a média de: " + media
}


// --Comando 4:--
/*
    4. Escreva um código que crie e exiba no console o typeof das seguintes operações bizzaras:
        Uma variável com um texto multiplicada por um número
        O número 50 dividido por 0
        Uma variável declarada mas sem valor atribuído
*/
function operacoesBizarras() {
    let texto = "que bizarro mano" * 2
    let numero = 50 / 0
    let naoTemValor

    console.log(typeof texto)
    console.log(typeof numero)
    console.log(typeof naoTemValor)
}
// FUNCOES | fim

// CONSOLE LOGS | inicio
console.log(declaracao())
console.log("---------------------------------------------")
console.log(canecas())
console.log("---------------------------------------------")
console.log(notas())
console.log("---------------------------------------------")
console.log(operacoesBizarras())
console.log("---------------------------------------------")
// CONSOLE LOGS | fim