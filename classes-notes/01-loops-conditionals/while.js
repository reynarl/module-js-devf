// let arreglo = []
// let userInput
// while(!(userInput=="")){
//   arreglo.push(userInput)
//   userInput = prompt("ingresa cualquier caracter")
// }
// console.log(arreglo)


// imprimir un mensaje para cada estudiante del arreglo
let estudiantes = ['reyna','carmen','fernando','jesús']

while(estudiantes.length > 0){ //cuando con shift saque a todos los estudiantes la cadena al final estará vacia y será = 0 por eso le digo que sea > 0
  let estudiante = estudiantes.shift() //guardo al estudiante que sacó
  console.log(`Hola, ${estudiante}`) //imprimo un mensaje para el que sacó y así por cada uno que va saliendo
}


// let contador = 0
// let arr = []

// while(contador<10){
//   let numAleatorio = Math.floor(Math.random()*100) //math.floor redondear
//   arr.push(numAleatorio)
//   contador++
// }

// console.log(arr)

let arreglo = []
let input
do{
  input = prompt("ingresa algo")
  arreglo.push(input)
}while(input!=="")
arreglo.pop()
console.log(arreglo)

//concatenamos las palabras ingresadas
let stringFinal2 = arreglo.join(" ") //podemos usar join para juntar las palabras

// let stringFinal = ""
// for(let i=0; i<arreglo.length; i++){
//   stringFinal = stringFinal + arreglo[i] + " "
// }

console.log(stringFinal2)