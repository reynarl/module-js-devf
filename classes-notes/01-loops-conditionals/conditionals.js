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
if(false) //false
if(undefined) //false
if(null) //false
if(0) //false
if(NaN) //false
if("") //false
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
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también
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