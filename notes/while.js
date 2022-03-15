// let arreglo = []
// let userInput
// while(!(userInput=="")){
//   arreglo.push(userInput)
//   userInput = prompt("ingresa cualquier caracter")
// }
// console.log(arreglo)


//imprimir un mensaje para cada estudiante del arreglo
let estudiantes = ['reyna','carmen','fernando','jesús']

while(estudiantes.length > 0){ //cuando con shift saque a todos los estudiantes la cadena al final estará vacia y será = 0 por eso le digo que sea > 0
  let estudiante = estudiantes.shift() //guardo al estudiante que sacó
  console.log(`Hola, ${estudiante}`) //imprimo un mensaje para el que sacó y así por cada uno que va saliendo
}

