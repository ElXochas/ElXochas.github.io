function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const rNum = randomNumber(100, 1);
console.log (rNum);

adivinanza();
function adivinanza() {
    let numUser = prompt("Introduce el número que tenes que adivinar:");

    if (numUser == rNum) {
        alert("¡Perfecto! ¡Excelente! Acertaste, ese era el número")    
    } else {
        if(numUser > rNum) {
            alert("¡Ups! El número a adivinar es menor que este");
        } else {
            alert("¡Ups! El número a adivinar es mayor que este");
        }
        adivinanza();
    }
}