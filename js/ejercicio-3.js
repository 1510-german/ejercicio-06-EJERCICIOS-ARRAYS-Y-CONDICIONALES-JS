// 3. Crea un programa que pida al usuario un número del 1 al 100 y use un bucle para imprimir la tabla de multiplicar de ese número. Si la multiplicación da como resultado un número mayor a 1000, detén el bucle.


let numero = prompt("Introduce un número del 1 al 100");
numero = parseInt(numero);
if (numero >= 1 && numero <= 100) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        if (resultado > 1000) {
            break;
        }
        console.log(`${numero} x ${i} = ${resultado}`);
    }
} else {
    console.log("El número introducido no está en el rango del 1 al 100");
}