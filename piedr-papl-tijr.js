// 0 = Piedra
// 1 = Papel
// 2 = Tijera

alert("¡¡¡Vamos a jugar un juego de piedra, papel, o tijeras!!!");
alert("Elige alguna de las tres opciones, la computadora también elegirá. ¡Suerte!")
alert("Tu puntuación inicial es: 0")

let eleccionCompu;
let cantVictorias = 0;
let cantPerdidas = 0;

//número aleatorio
function getRandomint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//función si jugada, hacer jugada
function hacerJugada(eleccion) {
    eleccionCompu = getRandomint(0, 2);
    switch (eleccion) {
        case 0:
            switch (eleccionCompu) {
                case 0:
                    alert("Empate");
                break;
                case 1:
                    alert("¡Perdiste!");
                    cantPerdidas++;
                    document.getElementsByClassName('texto-perdidas')[0].textContent = cantPerdidas;
                    cantVictorias--;
                    document.getElementsByClassName('texto-victorias')[0].textContent = cantVictorias;
                break;
                case 2:
                    alert("¡Ganaste!");
                    cantPerdidas--;
                    document.getElementsByClassName('texto-perdidas')[0].textContent = cantPerdidas;
                    cantVictorias++;
                    document.getElementsByClassName('texto-victorias')[0].textContent = cantVictorias;
                break;
            }
        break;
        case 1:
            switch (eleccionCompu) {
                case 1:
                   alert("Empate");
                break;
                case 2:
                    alert("¡Perdiste!"); 
                    cantPerdidas++;
                    document.getElementsByClassName('texto-perdidas')[0].textContent = cantPerdidas;
                    cantVictorias--;
                    document.getElementsByClassName('texto-victorias')[0].textContent = cantVictorias;
                break;
                case 0:
                    alert("¡Ganaste!");
                    cantPerdidas--;
                    document.getElementsByClassName('texto-perdidas')[0].textContent = cantPerdidas;
                    cantVictorias++;
                    document.getElementsByClassName('texto-victorias')[0].textContent = cantVictorias;
                break;
            }
        break;
        case 2:
            switch (eleccionCompu) {
                case 2:
                    alert("Empate");
                break;
                case 0:
                    alert("¡Perdiste!");
                    cantPerdidas++;
                    document.getElementsByClassName('texto-perdidas')[0].textContent = cantPerdidas;
                    cantVictorias--;
                    document.getElementsByClassName('texto-victorias')[0].textContent = cantVictorias;
                break;
                case 1:
                    alert("¡Ganaste!");
                    cantPerdidas--;
                    document.getElementsByClassName('texto-perdidas')[0].textContent = cantPerdidas;
                    cantVictorias++;
                    document.getElementsByClassName('texto-victorias')[0].textContent = cantVictorias;
                break;
            }
            break;

        default:
        break;

    }
}