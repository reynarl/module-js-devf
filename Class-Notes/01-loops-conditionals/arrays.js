//Agregar y eliminar elementos

let names = ['Reyna','Carmen','Fernando','Jesús']
console.log(names)
names.shift() //elimina el primer elemento
names.pop() //elimina el ultimo elemento
names.unshift('Emma') //agrega al principio
names.push('phil') //agrega al final
console.log(names)

//METODOS

let colors = ['red','pink','blue','yellow','green']

//slice corta el arreglo en la posicion dada y toma en cuenta el elemento de esa posicion
console.log(colors.slice(3))  //No modifica el arreglo original
// ['yellow,'green']

colors.splice(0,0,'violet') //agrega violet en la posicion 0 y no elimina nada
console.log(colors)
colors.splice(2,3,'black') //agrega black en la posicion 2 y elimina 3 items a partir de la posicion
console.log(colors)
//['violet','red','black','green']

//ORDENAR
colors.sort() //ordena de forma ascendente
console.log(colors)
colors.reverse() //coloca los elementos al revés
console.log(colors)

//UNIR ARRAYS
let personColor = names.concat(colors) //une dos arreglos
console.log(personColor)


