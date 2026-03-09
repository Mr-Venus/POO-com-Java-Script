//Funções | Inicio

// --Comando 1:--
/*
Crie uma variável com um número. Use o operador de resto (%) junto com um if/else para dizer se
o número é Par ou Ímpar
*/
function impar_Par() {
    let numbers = [15, 2, 4, 7]
    let aleatorio = numbers[Math.floor(Math.random() * numbers.length)]
    if (aleatorio % 2 == 0) {
        return `O número ${aleatorio} é Par.`
    } else {
        return `O número ${aleatorio} é Impar.`
    }
}

// --Comando 2:--
/*
Um brinquedo de parque exige altura mínima de 1.50m OU estar acompanhado dos pais. Crie as
variáveis altura e acompanhado (boolean). Use if para dizer se a criança pode entrar.
*/

function validaEntrada() {
    let alturas = [1.5, 1.3, 1.55, 1.6, 1.45]
    let acompanhado = [true, false]

    let crianca = [alturas[Math.floor(Math.random() * alturas.length)], acompanhado[Math.floor(Math.random() * acompanhado.length)]]

    if (crianca[0] >= 1.5 && crianca[1] == true) {
        return `O(a) Pequeno(a) garfanhoto tem ${crianca[0]}m de altura e está acompanhado(a). Passagem liberada!`
    } else if (crianca[0] >= 1.5 && crianca[1] == false) {
        return `O(a) Pequeno(a) garfanhoto tem ${crianca[0]}m de altura e não está acompanhado(a). Passagem negada!`
    } else if (crianca[0] < 1.5 && crianca[1] == false) {
         return `O(a) Pequeno(a) garfanhoto está acompanhado(a), mas tem apenas ${crianca[0]}m de altura. Passagem negada!`
    } else {
        return `O(a) Pequeno(a) garfanhoto está abaixo da altura necessária com ${crianca[0]}m e não está acompanhado(a). Passagem negada!`
    }
}

// --Comando 3:--
/*
(Usando for): Crie um loop que percorra os números de 1 a 10. Dentro do laço crie um swich para
com os casos 1, 2, ..., 10. Cada case imprime na tela o valor de valor por extenso (Um, Dois, Três,
...).
*/

function percorreFor() {
    for(let numero = 1; numero < 11; numero++) {
        switch(numero) {
            case 1:
                console.log(`${numero} : Um`)
                break
            case 2:
                console.log(`${numero} : Dois`)
                break
            case 3:
                console.log(`${numero} : Três`)
                break
            case 4:
                console.log(`${numero} : Quatro`)
                break
            case 5:
                console.log(`${numero} : Cinco`)
                break
            case 6:
                console.log(`${numero} : Seis`)
                break
            case 7:
                console.log(`${numero} : Sete`)
                break
            case 8:
                console.log(`${numero} : Oito`)
                break
            case 9:
                console.log(`${numero} : Nove`)
                break
            case 10:
                console.log(`${numero} : Dez`)
                break
            default:
                console.log(`Número não encontrado`)
                break
        }
    }
}

// --Comando 4:--
/*
(Usando while): Crie um loop que percorra os números de 1 a n (onde n é definido pelo
programador). Dentro do loop, verifique se o número é par. Se for, some-o a uma variável
acumuladora chamada somaTotal. No final, imprima o valor da soma de todos os números pares
entre 1 e n.
*/

function acumuladorDePar() {
    let num = 1
    let cont = 0
    let somaTotal = 0

    while (num < 25) {
        if (num % 2 == 0) {
            cont++
            somaTotal += num
        }
        num++
    }

    return `No intervalo de números entre [1 | 25] há um total de ${cont} números pares
     e o valor do seu somatório resulta em ${somaTotal}.`
}

//Funções | Fim

// CONSOLE LOGS | Inicio

console.log("------------------------------------------------------------------\n" + impar_Par() + "\n------------------------------------------------------------------")
console.log(validaEntrada() + "\n------------------------------------------------------------------")
console.log(percorreFor() + "\n------------------------------------------------------------------")
console.log(acumuladorDePar() + "\n------------------------------------------------------------------")

// CONSOLE LOGS | Fim