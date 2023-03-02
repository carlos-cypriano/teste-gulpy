console.log('Teste 1')

let indice = 13
let k = 0
let soma = 0

while (k < indice) {
    k += 1
    soma += k

    console.log(soma)
}

console.log("--------------------------------------------------------")
console.log('Teste 2')

/*Como quero pegar o próximo número da sequência, que no caso 
  virá a partir do indice 2, e por isso inicio o loop for com valor 2,
  eu vou setar o valor desse indice subtraindo i por 2 para ser retornado
  o valor do indice 0 e somá-lo ao valor de i-1 que será indice 2 -1 igual
  ao valor 1(indice 1), que por sua vez está com valor de 1. Fazendo
  sempre isso retornando os 2 últimos indices antes do atual índice.
  Essa interação acontecerá até o 10º termo da sequencia*/

var fibonacci = [0, 1];

for (i = 2; i <= 11; i++) {

    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    console.log(fibonacci[i]);
}

console.log("--------------------------------------------------------")
console.log('Teste 3')

/*Infelizmente não consegui resolver o problema causado pelo método fetch
para então poder fazer um filtro dos menores e maiores faturamentos
através talvez de array filter ou outra maneira de tratar essa lógica.
Espero que as demais questões resolvidas sejam suficientes para minha aprovação*/

// let consultandoJson = () => {
//     fetch('dados/faturamento.json')
//     .then(reposta => reposta.json())
//     .then(dados => {
//         return dados
//         // for(let i = 0; i <= 17; i++){
//         //     return dados[i]
//         // }
//     })
// }

// console.log(consultandoJson())

console.log("--------------------------------------------------------")
console.log('Teste 4')

let rj = 67836.43
let sp = 36678.66
let mg = 29229.88
let es = 27165.48
let outros = 19849.53

let percentualPorEstado = () => {
    let total = rj + sp + mg + es + outros

    return `Percentual RJ: ${(rj * 100) / total}%
    Percentual SP: ${(sp * 100) / total}%
    Percentual MG: ${(mg * 100) / total}%
    Percentual ES: ${(es * 100) / total}%
    Percentual Outros: ${(outros * 100) / total}%`
}

console.log(percentualPorEstado())

console.log("--------------------------------------------------------")
console.log('Teste 5')

let inverterString = (texto = '') =>{
    let novaString = ''
    for(let i = texto.length -1; i >= 0; i--){
        novaString += texto[i]
    }
    return novaString
}

console.log(inverterString('Carlos'))