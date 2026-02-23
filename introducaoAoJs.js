// FUNCOES

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
function canecas() {
    let canecaA = "Café"
    let canecaB = "Leite"
    let troca = canecaA
    canecaA = canecaB
    canecaB = troca
    // [canecaA, canecaB] = trocaValor(canecaA, canecaB)
    return "As Canecas A e B, inicialmente preenchidas com Café e Leite, respectivamente, agora apresentam seus valores invertidos, sendo Caneca a: " + canecaA + " e Caneca b: " + canecaB
}

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

function operacoesBizarras() {
    let texto = "que bizarro mano" * 2
    let numero = 50 / 0
    let naoTemValor

    console.log(typeof texto)
    console.log(typeof numero)
    console.log(typeof naoTemValor)
}

// CONSOLE LOGS
console.log(declaracao())
console.log("---------------------------------------------")
console.log(canecas())
console.log("---------------------------------------------")
console.log(notas())
console.log("---------------------------------------------")
console.log(operacoesBizarras())
console.log("---------------------------------------------")