//Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
let nums= []
let inputNum = prompt("Ingresa numero")
for(let i =1; i<=inputNum; i++){
  if(i%5 == 0){
    nums.push(i)
    }
}

console.log(nums)
