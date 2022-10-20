alert ("Hola Mundo")

function agregarBox() {
    let box = document.querySelector(".box").cloneNode(true)
    let container = document.querySelector(".container")
    console.log (box)
    console.log (container)

    let docFrag = document.createDocumentFragment()
    docFrag.appendChild(box)
    container.appendChild(docFrag)
}


let numr = prompt("Pone un número")
console.log("Tabla del " + numr);
for (i = 0; i <= 10; i++){
    console.log(numr * i);
}


let msg
function alertaMsg() {
    msg = prompt("Porfavor escribí 'hola'")
}
while (msg != "hola") {
    alertaMsg()
}

alert("Muy bien, escribiste hola")


let array = [3, 2, 1]
console.log (array)
console.log ("Array length: " + array.length)
console.log (array[1])
//Hay muchas más funciones que se pueden hacer con array


let manzana = {
    color: "rojo/verde",
    peso: 50,
    unidad_de_peso: "gr",
    semillas: {
        cantidad: 6
    }
}
console.log(manzana);


let SuMAr = 0;
function SuMar() {
    SuMAr++;
    document.getElementsByClassName('suMAr')[0].textContent = SuMAr;
}
