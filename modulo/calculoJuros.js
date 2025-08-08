/*********************************************************************************************************
 * Objetivo: Arquivo responsavel por calcular o sistema de juros composto
 * Autor: Gustavo de Paula Silva
 * Data: 05/08/2025
 * Versão: 1.1
 *********************************************************************************************************/
function calcularJuros(capitalInicial, jurosAnual, vezesJuros, tempoAnos) {
    let nunCapitalInicial = Number(capitalInicial)
    let nunJurosAnual = Number(jurosAnual) / 100
    let nunVezesJuros = Number(vezesJuros)
    let numTempoAnos = Number(tempoAnos)

    let TotalJuros = nunCapitalInicial * Math.pow((1 + nunJurosAnual / nunVezesJuros), (nunVezesJuros * numTempoAnos))
    return Number(TotalJuros).toFixed(3)
}
module.exports = {
    calcularJuros
}