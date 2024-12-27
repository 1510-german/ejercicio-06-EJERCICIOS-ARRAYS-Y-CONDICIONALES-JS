// 10. Escribe un programa que recorra un array de edades [18, 25, 14, 32, 16, 40] usando un bucle y clasifique cada edad como "Mayor de edad" o "Menor de edad". Imprime cada edad con su clasificación.


let edades = [18, 25, 14, 32, 16, 40];

for (let i = 0; i < edades.length; i++) {
    let clasificacion = edades[i] >= 18 ? "Mayor de edad" : "Menor de edad";
    console.log(`Edad: ${edades[i]}, Clasificación: ${clasificacion}`);
}