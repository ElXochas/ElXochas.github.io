const contraseña = ("ñ")
let respuesta = prompt ("Para entrar introduce la contraseña")

function pregunta() {
    let respuesta = prompt ("Para entrar introduce la contraseña")
    if (respuesta == contraseña) {
        alert ("Perfecto, esa es la contraseña, puedes entrar")
    } else {
        alert ("Esa no es la contraseña, vuelve a intentar")
        pregunta()
    }
}

if (respuesta == contraseña) {
    alert ("Perfecto, esa es la contraseña, puedes entrar")
} else {
    alert ("Esa no es la contraseña, vuelve a intentar")
    pregunta()
}