/*********************************************************************************************************
 * Objetivo: Arquivo responsavel por mostrar a mensagem final do sistema
 * Autor: Gustavo de Paula Silva
 * Data: 05/08/2025
 * Versão: 1.1
 *********************************************************************************************************/
function mensagemFinal(nomeCliente, nomeproduto, nunCapitalInicial, nunJurosAnual, nunVezesJuros, numTempoAnos, TotalJuros) {
    
    let teste = `******************* Viva Moda *******************\n
    Muito obrigado por realizar a sua compra conosco Sr(a)${nomeCliente}\n
    A compra do produto: ${nomeproduto}, tem um valor de: ${nunCapitalInicial}R$\n
    A sua compra será parcelada em ${nunJurosAnual} vezes e o Sr(a) pagará: ${TotalJuros}\n
     \n
    Muito obrigado por escolher a Viva Moda.\n
    ******************************************************* `

    return teste
}
module.exports = {
    mensagemFinal
}