//1.
// var input = prompt("Eres bellísima/o?")
// if (input == "si"){
//   console.log("Ciertamente");
// }else{
//   console.log("No te creo");
// }

// 2.
// var num = parseInt(prompt("Ingresa un número"))
// if (num % 2 == 0){
//   console.log(num +" es divisible entre 2");
// }else{
//   console.log(num +" no es divisible entre 2");
// }

// 3.
// var num = parseInt(prompt("Ingresa un número"))
// if (num % 2 == 0){
//   alert("Es par")
// }else{
//   alert("No es par")
// }

//4.
// var num = parseInt(prompt("Ingresa un numero"))
// if (num === 1000){
//   alert("Ganaste un premio!")
// }
// else{
//   alert("Número: "+num+ " Lo sentimos, sigue participando")
// }

//5.
// var num1 = parseInt(prompt("Ingresa un numero"))
// var num2 = parseInt(prompt("Ingresa otro numero"))

// if(num1<num2){
//   console.log(num1+" Es menor");
// }else{
//   console.log(num2 +" Es menor");
// }

//6.
// var num1 = parseInt(prompt("Ingresa el primer número"))
// var num2 = parseInt(prompt("Ingresa el segundo número"))
// var num3 = parseInt(prompt("Ingresa el tercer número"))

// if(num1>num2 && num1>num3){
//   console.log(num1 +" Es mayor");
// }
// if(num2>num1 && num2>num3){
//   console.log(num2 +" Es mayor");
// }
// if(num3>num1 && num3>num2){
//   console.log(num3 +" Es mayor");
// }
// if(num1==num2 || num1==num3 || num2==num3){
//   console.log("dos numeros ingresados son iguales");
// }

//7.
// var dia = prompt("Ingresa un día de la semana")
// if(dia == "lunes" || dia == "martes"|| dia == "miercoles"|| dia == "jueves" || dia == "viernes"|| dia == "sabado"|| dia == "domingo"){
//   console.log("El día que ingresaste es: " + dia);
// }else{
//   console.log("Ingresa un día correctamente");
// }

//8.
// var calificacion = prompt("Ingresa una calificacion del 1 al 10")

// if(calificacion > 0 && calificacion < 11){
//   if(calificacion < 6){
//     console.log("Reprobrado");
//   }
//   if(calificacion >= 6 && calificacion <=8){
//     console.log("Regular");
//   }
//   if(calificacion == 9){
//     console.log("Bien");
//   }
//   if(calificacion == 10){
//     console.log("Excelente");
//   }
// }else{
//   console.log("Error: Ingresa un número entre el rango");
// }

//9.
// var topping = prompt("Ingresa un topping:")

// if(topping=="oreo" || topping=="kitkat" || topping=="brownie" ){
//   if(topping=="oreo"){
//     console.log("El topping de oreo cuesta 10 MXN");
//   }
//   if(topping=="kitkat"){
//     console.log("El topping de kitkat cuesta 15 MXN");
//   }
//   if(topping=="brownie"){
//     console.log("El topping de brownie cuesta 20 MXN");
//   }
// }else{
//   console.log("No tenemos ese topping, lo sentimos\nEl helado sin topping cuesta 50 MXN")
// }

//10.
var opc_carrera = prompt("Selecciona una opción:\n1. Course\n2. Carrera\n3. Master")

if(opc_carrera>0 && opc_carrera<4){
  var opcion_beca = prompt("Beca con la que cuenta\nSeleccione una opción:\n1. Beca Facebook\n2. Beca Google\n3. Beca Jesus")
  if(opcion_beca>0 && opcion_beca<4){
    var cour=4999*2
    var car=3999*6
    var mas=2999*12
    if(opc_carrera==1 && opcion_beca==1){
      var beca_face=parseFloat(cour-(cour*.20)).toFixed(2)
      console.log("Beca Facebook: 20% de descuento\nEl precio sin descuento por los dos meses es de: $"+(cour)+"\nEl precio final con descuento es de: $"+beca_face);
    }else if(opc_carrera==1 && opcion_beca==2){
      var beca_google=parseFloat(cour-(cour*.15)).toFixed(2)
      console.log("Beca Google: 15% de descuento\nEl precio sin descuento por los dos meses es de: $"+(cour)+"\nEl precio final con descuento es de: $"+beca_google);
    }else if(opc_carrera==1 && opcion_beca==3){
      var beca_jesus=parseFloat(cour-(cour*.5)).toFixed(2)
      console.log("Beca Jesus: 50% de descuento\nEl precio sin descuento por los dos meses es de: $"+(cour)+"\nEl precio final con descuento es de: $"+beca_jesus);
    }else if(opc_carrera==2 && opcion_beca==1){
      var beca_face=parseFloat(car-(car*.20)).toFixed(2)
      console.log("Beca Facebook: 20% de descuento\nEl precio sin descuento por los 6 meses es de: $"+(car)+"\nEl precio final con descuento es de: $"+beca_face);
    }else if(opc_carrera==2 && opcion_beca==2){
      var beca_google=parseFloat(car-(car*.15)).toFixed(2)
      console.log("Beca Google: 15% de descuento\nEl precio sin descuento por los 6 meses es de: $"+(car)+"\nEl precio final con descuento es de: $"+beca_google);
    }else if(opc_carrera==2 && opcion_beca==3){
      var beca_jesus=parseFloat(car-(car*.5)).toFixed(2)
      console.log("Beca Jesus: 50% de descuento\nEl precio sin descuento por los 6 meses es de: $"+(car)+"\nEl precio final con descuento es de: $"+beca_jesus);
    }else if(opc_carrera==3 && opcion_beca==1){
      var beca_face=parseFloat(mas-(mas*.20)).toFixed(2)
      console.log("Beca Facebook: 20% de descuento\nEl precio sin descuento por los 12 meses es de: $"+(mas)+"\nEl precio final con descuento es de: $"+beca_face);
    }else if(opc_carrera==3 && opcion_beca==2){
      var beca_google=parseFloat(mas-(mas*.15)).toFixed(2)
      console.log("Beca Google: 15% de descuento\nEl precio sin descuento por los 12 meses es de: $"+(mas)+"\nEl precio final con descuento es de: $"+beca_google);
    }else if(opc_carrera==3 && opcion_beca==3){
      var beca_jesus=parseFloat(mas-(mas*.5)).toFixed(2)
      console.log("Beca Jesus: 50% de descuento\nEl precio sin descuento por los 12 meses es de: $"+(mas)+"\nEl precio final con descuento es de: $"+beca_jesus);
    }
  }else{
    console.log("Error: seleccione una opción válida");
  }
}else{
  console.log("Error: seleccione una carrera válida");
}


