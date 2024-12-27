// 9. Pide al usuario un número entero positivo y usa un bucle para invertirlo. Por ejemplo, si el usuario ingresa 12345, el programa debe devolver 54321


let numero = prompt("Introduce un número entero positivo");

let numeroCadena = numero.toString();

let numeroInvertido = '';

for (let i = numeroCadena.length - 1; i >= 0; i--) {
    numeroInvertido += numeroCadena[i];
}

numeroInvertido = parseInt(numeroInvertido);

console.log(`El número invertido es ${numeroInvertido}`);
