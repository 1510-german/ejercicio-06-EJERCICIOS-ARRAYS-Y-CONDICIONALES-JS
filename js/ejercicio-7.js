// 7. Usa un bucle para imprimir los números del 1 al 50. Si el número es divisible entre 3, imprime "Fizz". Si es divisible entre 5, imprime "Buzz". Si es divisible entre ambos, imprime "FizzBuzz".


for (let numero = 1; numero <= 50; numero++) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("FizzBuzz");
    } else if (numero % 3 === 0) {
        console.log("Fizz");
    } else if (numero % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(numero);
    }
}