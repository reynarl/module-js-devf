//del 1 al 10 cuantos números son múltiplos de 2?

let contador = 0

for(let i=1; i<=10; i++){
  if(i%2 == 0){
    contador = contador + 1 // cuenta cuantas veces entra al ciclo
    console.log(i)
  }
}
console.log("Números pares: "+contador)

//Imprimir un arreglo
let estudiantes = ['reyna','carmen','fernando','jesús']

// for(let j=0; j<estudiantes.length; j++){
//   console.log(`Hola ${estudiantes[j]}`)
// }

// for of
//for se va a repetir las veces del tamaño del arreglo 'estudiantes'
//estudiante es el singular de un grupo de estudiantes de nuestro arreglo  
//estudiante pasa a ser como un índice del for
for(let estudiante of estudiantes){
  console.log(`Hola ${estudiante}`)
}
