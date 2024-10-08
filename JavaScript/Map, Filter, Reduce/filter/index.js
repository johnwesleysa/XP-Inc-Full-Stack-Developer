//Filtre e retorne todos os números pares de um array.

const nums = [1,2,3,4,5,6,7,8,9,10];

function calc(arr){
    return arr.filter(function(num){
        if (num%2 == 0){
            return num
        }
    })
}

console.log(nums.filter((num) => num%2 == 0))
console.log(calc(nums))

