//Some todos os números de um array

const nums = [1,2,3,4,5,6,7,8,9,10]

console.log(nums.reduce((prev, current) => prev + current))

//Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const listaPreco = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name:'toalha',
        preco: 30
    }
];

const saldoDisponivel = 100


function subtrairSaldo(lista, saldo) {
    return lista.reduce(function(prev, current, index){
        const sub = prev - current.preco 
        console.log()
        console.log('rodada', index + 1)
        console.log({prev})
        console.log({current})
        return sub
        
        
    }, saldo)
}
console.log(subtrairSaldo(listaPreco, saldoDisponivel))




