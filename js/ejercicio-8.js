// 8. Escribe un programa que use un bucle para pedir al usuario números enteros. Suma esos números y detén el bucle cuando el acumulado sea mayor o igual a 100. Muestra el total acumulado.


let acumulado = 0;

while (acumulado < 100) {
    let numero = prompt("Introduce un número entero");
    numero = parseInt(numero);
    acumulado += numero;
    console.log(`Acumulado actual ${acumulado}`);
}
console.log(`El total acumulado es ${acumulado}`);
