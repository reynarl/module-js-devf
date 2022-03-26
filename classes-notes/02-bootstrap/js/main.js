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