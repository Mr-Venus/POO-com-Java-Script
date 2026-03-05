//Funções | Inicio

// --Comando 1:--
/*
    1. Crie uma variável com um e-mail bagunçado: ' Joao.SILVA@Gmail.com '. Sua missão é limpar
    os espaços e transformar tudo para letras minúsculas em uma única linha de código (ou duas).
    Mostre o resultado final limpo: 'joao.silva@gmail.com'.
*/

 function emailBaguncado() {
    let email = " diOgo.BezErRa@Gmail.cOm "
    console.log(email.trim().toLocaleLowerCase())
 }

 // --Comando 2:--
/*
    2. Crie três variáveis: idade (number), temCarteirinha (boolean) e censura (number = 18). O
    cliente só pode entrar se tiver a idade maior ou igual à censura OU se tiver a carteirinha. Crie uma
    variável podeEntrar que receba o resultado dessa lógica e a imprima.
*/

function verificaEntrada() {
    let idade = 19
    let temCarteirinha = false
    let censura = 18

    let podeEntrar = temCarteirinha && (idade >= censura)
    console.log(podeEntrar)
}

 // --Comando 3:--
/*
    3. Você recebeu o nome de um arquivo: trabalho_final.docx. Crie uma lógica que verifique se o
    arquivo é do tipo .docx E se o nome contém a palavra 'final'. Se ambos forem verdadeiros, exiba true.
*/

function verificaArquivo() {
    let arquivo = "fiqueMilionarioEmTresPassosSemVirus.docx"
    let verificador = arquivo.includes("Milionario")
    let terminaCom = arquivo.endsWith(".docx")

    if(verificador == true && terminaCom == true) {
        return "Arquivo esta certin. É do tipo docx e contem conteúdo milionário🤑🤑"
    } else {
        if (verificador == false && terminaCom == true) {
            return "Arquivo esta errado viu. É do tipo docx, mas não contem conteúdo milionário😨😨"
        }
        else if (verificador == true && terminaCom == false) {
            return "Arquivo esta errado ☹️. Não é do tipo docx, mas contem conteúdo milionário🤑🤑"
        }
        else {
            return "Arquivo esta totalmente errado 🥶🥶."
        }
    }
}

 // --Comando 4:--
/*
    4. Dado o nome 'mario', sua missão é transformar a primeira letra em maiúscula e juntar com o
restante minúsculo para formar 'Mario'.
*/

function transformaUpper() {
    let nome = "mario"
    let primeiraLetra = nome.slice(0,1).toLocaleUpperCase()

    let nomeFinal = primeiraLetra + nome.slice(1)

    return `A palava inicial ${nome} foi atualizada para ${nomeFinal}`

}

//Funções | Fim

 // CONSOLE LOGS | Inicio

 console.log(emailBaguncado())
 console.log(verificaEntrada())
 console.log(verificaArquivo())
 console.log(transformaUpper())

 // CONSOLE LOGS | Fim