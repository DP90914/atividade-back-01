const MESSAGE_ERRO_EMPTY = "ERRO: há um espaço vazio"
const MESSAGE_ERRO_OUT_OF_RANGE = "ERRO: escolha um numero entre 0 a 10"
const MESSAGE_ERRO_NAN = "ERRO: Não se pode colocar uma letra. Deve se colocar numero entre 0 a 10!"
const MESSAGE_ERRO_NOT_NAN = "ERRO: Não se pode colocar um numero"

// Import da biblioteca do readline para manipular a entrada de dados no terminal
var readline = require('readline')

//Criando um objeto de entrada e saída de dados no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
})
entradaDeDados.question('Digite o nome da empresa: ', function(CLiente){
    //Recebe o argumento da função e guarda em uma variavel local, em MAIUSCULO
    let nomeCLiente = String(CLiente).toUpperCase()
    
    //entrada de dados da nota1
    entradaDeDados.question('Digite do produto: ', function(produto){
        let nomeproduto = String(produto).toUpperCase()

        entradaDeDados.question("Insira o capital inicial: ", function(capitalInicial){
            let nunCapitalInicial = Number(capitalInicial)

            entradaDeDados.question("Insira a taxa de juros anual em percentual: ", function(jurosAnual){
                let nunJurosAnual = Number(jurosAnual)

                entradaDeDados.question("Insira o número de vezes que os juros são compostos por ano: ", function(vezesJuros){
                    let nunVezesJuros = Number(vezesJuros)

                    entradaDeDados.question("Insira o tempo em anos: ",  function(tempoAnos){
                        let numTempoAnos = Number(tempoAnos)
                        
                        if(nomeCLiente == "" || nomeproduto == "" || nunCapitalInicial == "" || nunJurosAnual == "" || nunVezesJuros == "" || numTempoAnos == ""){
                            console.log(MESSAGE_ERRO_EMPTY)
                        }else if(nunCapitalInicial < 0 || nunJurosAnual < 0 || vezesJurosAnuais < 0 || numTempoAnos < 0){

                        }
                    })
                })
            })
        })
    })
})