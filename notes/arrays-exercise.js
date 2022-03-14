var nums = []
nums = [1,2,3,10,20,3,5,6,7,9]
console.log(nums)

// var ingresar = prompt("ingresa palabras separadas por una coma")
// var arreglo = ingresar.split(',')
// console.log(arreglo)

var numbers = [10,40,30,20,15,5]
var min = Math.min(...numbers)
numbers.sort()
numbers.pop()
numbers.unshift(min)
console.log(numbers)