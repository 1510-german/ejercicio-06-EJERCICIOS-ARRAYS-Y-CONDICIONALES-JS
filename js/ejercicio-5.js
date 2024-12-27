// 5. Dado un array de números [23, 45, 12, 67, 34, 89, 21], escribe un programa que use un bucle para encontrar el número más grande. Usa condicionales para comparar los valores


let numeros = [23, 45, 12, 67, 34, 89, 21];

let maximo = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
        maximo = numeros[i];
    }
}

console.log(`El número más grande es ${maximo}`);
