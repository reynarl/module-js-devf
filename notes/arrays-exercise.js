// let nums = []
// nums = [1,2,3,10,20,3,5,6,7,9]
// console.log(nums)

// let ingresar = prompt("ingresa números separados por una coma")
// let arreglo = ingresar.split(',')
// console.log(arreglo)

let numbers = [10,40,30,20,15,5]
numbers.sort(function(a,b) {return a-b})
let min = Math.min(...numbers) //devuelve el número menor de varios números
let max = Math.max(...numbers)
console.log(numbers + "\nNumero menor: "+min+"\nNúmero mayor: "+max)