// 11. Crea un programa que solicite al usuario una lista de palabras separadas por comas. Usa un bucle para verificar cuáles de esas palabras son palíndromas y muéstralas. Una palabra es palíndroma si se lee igual al derecho y al revés.


let listaPalabras = prompt("Introduce una lista de palabras separadas por comas");

let palabras = listaPalabras.split(',');

function esPalindromo(palabra) {
    
    palabra = palabra.trim().toLowerCase();
    let invertida = palabra.split('').reverse().join('');
    return palabra === invertida;
}

let palindromas = [];

for (let i = 0; i < palabras.length; i++) {
    if (esPalindromo(palabras[i])) {
        palindromas.push(palabras[i].trim());
    }
}

if (palindromas.length > 0) {
    console.log("Palabras palíndromas:");
    for (let i = 0; i < palindromas.length; i++) {
        console.log(palindromas[i]);
    }
} else {
    console.log("No se encontraron palabras palíndromas.");
}