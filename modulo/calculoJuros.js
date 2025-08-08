/*********************************************************************************************************
 * Objetivo: Arquivo responsavel por calcular o sistema de juros composto
 * Autor: Gustavo de Paula Silva
 * Data: 05/08/2025
 * Versão: 1.1
 *********************************************************************************************************/
function calcularJuros(capitalInicial, jurosAnual, vezesJuros, tempoAnos) {
    // Chamado as variaveis e as tranformando em numeros
    let nunCapitalInicial = Number(capitalInicial)
    // tornar o juros em porcentagem
    let nunJurosAnual = Number(jurosAnual) / 100
    let nunVezesJuros = Number(vezesJuros)
    let numTempoAnos = Number(tempoAnos)

    // Caluculo de Juros
    let TotalJuros = nunCapitalInicial * Math.pow((1 + nunJurosAnual / nunVezesJuros), (nunVezesJuros * numTempoAnos))
    // Retorna o resultado
    return Number(TotalJuros).toFixed(3)
}
module.exports = {
    calcularJuros
}