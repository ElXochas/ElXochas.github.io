alert ("Hola, hoy puedes poner los precios de estas cuatro cosas, cuanto te costó cada una, y ver cuanto es el precio total")

let autito = prompt ("Aca pone cuanto te costó el autito del Rayo McQueen")

console.log ("El precio del autito del Rayo McQueen es $" + autito)
console.log (" ")
alert ("El precio del autito del Rayo McQueen es $" + autito)

let APP = prompt ("Aca pone cuanto te costó el album de Peppa Pig")

console.log ("El precio del album de Peppa Pig es $" + APP)
console.log (" ")
alert ("El precio del album de Peppa Pig es $" + APP)

let calculadora = prompt ("Aca pone cuanto te costó la calculadora")

console.log ("El precio de la calculadora es $" + calculadora)
console.log (" ")
alert ("El precio de la calculadora es $" + calculadora)

let remera = prompt ("Aca pone cuanto te costó la remera naranja")

console.log ("El precio de la remera naranja es $" + remera)
console.log (" ")
alert ("El precio de la remera naranja es $" + remera)

let suma = Number(autito) + Number(APP) + Number(calculadora) + Number(remera)

console.log ("El precio total de tus compras es: $" + suma)

alert ("El precio total de tus compras es: $" + suma)