let pagina = document.getElementById('title')

function screenBlanco(){
  let body = document.getElementById('cuerpo')
  body.style.backgroundColor='white'
}

function screenVerde(){
  let body = document.getElementById('cuerpo')
  body.style.backgroundColor='green'
}

function screenAmarillo(){
  let body = document.getElementById('cuerpo')
  body.style.backgroundColor='yellow'
}

//Agegar un elemento
let h2 = document.createElement('h2')
h2.innerText = 'h2 desde JS'
let body = document.getElementsByTagName('body')
body[0].appendChild(h2)

let oculto = document.getElementById('title').hidden = true
// let oculto = document.getElementById('num').style.display = 'none'

function suma(){
  let num1 = document.getElementById('num1').value
  let num2 = document.getElementById('num2').value
  let result = parseInt(num1)+parseInt(num2)
  document.getElementById('res').value = result
  if (result !== NaN){
    
  }
  return result
}

var x = 14
var y = 10
resultado = x + y
// console.log(j)
if(x==14){
  let j = 'hola'
  console.log(j)
}
// z = '14'
console.log('14'==14)
//TEMPLATE STRING EN JS / PLANTILLAS LITERALES
//Cadena de texto es un string donde puedo meter varias lineas sin la necesidad de concatenar con el mas
console.log('el resultado de sumar x+y es: '+resultado+
 '\ny la resta es:'+ (x-y))
console.log(`el resultado de sumar x+y es ${resultado} 
y la resta es ${x-y}`)

// let p ={
//   name: 'Reyna',
//   hello: function(name){
//     console.log(`Hello ${name}`)
//   }
// }

let p2 ={
  name: 'Reyna',
  hello: function(){
    console.log(`Hello ${p2.name}`)
  }
}
// let obj = {
//   hello: () => console.log('hola')
// }

// p.hello('reyna')
p2.hello()
p2.name = 'fer'
p2.hello()
Object.freeze(p2)
p2.name = 'Carmen'
p2.hello()
