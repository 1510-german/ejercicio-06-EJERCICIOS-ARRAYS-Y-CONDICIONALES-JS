// 4. Escribe un programa que solicite al usuario una palabra y use un bucle para contar cuántas vocales tiene. Usa condicionales para verificar si cada letra es una vocal.


let palabra = prompt("Introduce una palabra");
let contadorVocales = 0;
let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i])) {
        contadorVocales++;
    }
}
console.log(`La palabra "${palabra}" tiene ${contadorVocales} vocales`);
