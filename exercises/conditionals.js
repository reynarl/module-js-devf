/*
var edad = parseInt(prompt("ingresa tu edad"))

if(edad >= 18){
  console.log("Eres mayor de edad")
}else{
  console.log("Eres menor de edad")
}

if (edad == 18){
  console.log("Los datos son iguales")
}
if( edad === 18){
  console.log("Los datos son idénticos")
}
*/

//FALSY
// Condiciones que retornaran un resultado falso
/*
if(false)
if(undefined)
if(null)
if(0)
if(NaN)
if("")
*/

var input = 0
if(input){
  console.log("Entro en el if");
}else{
  console.log("Entró al else");
}

//TRULY
// Condiciones que retornaran un resultado verdadero
/*
if(true)
if({})
*/

var input = true
if(input){
  console.log("Entro en el if");
}else{
  console.log("Entró al else");
}

var color = "rojo"
var edad = 12

if( color == "rojo" && edad >= 18){
  console.log("Puedes acceder al club");
}else{
  console.log("NO puedes entrar al club");
}