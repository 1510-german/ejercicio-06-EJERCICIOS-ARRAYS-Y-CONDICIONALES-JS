// 12. Crea un programa que genere un número aleatorio entre 1 y 10. Luego usa un bucle para permitir al usuario adivinar el número. Si el usuario adivina correctamente, felicítalo y detén el bucle. Si no, indica si el número que ingresó es mayor o menor al número generado


let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let adivinanza;

while (true) {
    
    adivinanza = prompt("Adivina el número (entre 1 y 10)");

    adivinanza = parseInt(adivinanza);

    if (adivinanza === numeroAleatorio) {
        console.log("¡Felicidades! Has adivinado el número.");
        break;
    } else if (adivinanza > numeroAleatorio) {
        console.log("El número es menor. Inténtalo de nuevo.");
    } else {
        console.log("El número es mayor. Inténtalo de nuevo.");
    }
}