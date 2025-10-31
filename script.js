// Ejercicio 03
function doblarNumeros(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i] * 2);
    }
    return resultado;
}
console.log("Ejercicio 03:");
console.log(doblarNumeros([1, 2, 3, 4]));
console.log(doblarNumeros([-1, 0, 5]));

// Ejercicio 04
function filtrarYTransformar(arr) {
    let sumaTotal = 0;
    
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num >= 0) {
            let cuadrado = num ** 2;
            sumaTotal += cuadrado; 
        }
    }
    return sumaTotal;
}
console.log("Ejercicio 04:");
console.log(filtrarYTransformar([2, -3, 4, -1, 5]));
console.log(filtrarYTransformar([-1, -2, 3]));
console.log(filtrarYTransformar([0, 0, 1]));

// Ejercicio 05
function reordenarPalabras(oracion) {
    oracion = oracion.trim();
    let palabras = oracion.split(" ");
    let mayusculas = [];
    
    for (let i = 0; i < palabras.length; i++) {
        mayusculas.push(palabras[i].toUpperCase());
    }
    
    mayusculas.sort();
    return mayusculas;
}
console.log("Ejercicio 05:");
console.log(reordenarPalabras("sol luna estrella planeta")); 
console.log(reordenarPalabras("perú chile argentina brasil")); 

// Ejercicio 06
const nombresSet = new Set(["Ana", "Luis", "Ana", "Pedro", "Luis", "María"]);
console.log("Ejercicio 06:");
console.log(nombresSet);

// Ejercicio 07
function tieneDuplicados(arr) {
    return new Set(arr).size < arr.length;
}
console.log("Ejercicio 07:");
console.log(tieneDuplicados([1, 2, 3, 4]));
console.log(tieneDuplicados([1, 2, 2, 3]));
console.log(tieneDuplicados(["a", "b", "a"]));
console.log(tieneDuplicados([]));

// Ejercicio 08
const catalogo = new Map([
    ["laptop", 3500.50],
    ["mouse", 95.20],
    ["teclado", 250.90],
    ["monitor", 720.45]
]);

function calcularTotalCompra(mapaPrecios, listaCompras) {
    let total = 0;
    for (const producto of listaCompras) {
        if (mapaPrecios.has(producto)) {
            total += mapaPrecios.get(producto);
        }
    }
    return Number(total.toFixed(2));
}

const compra = ["laptop", "mouse", "teclado"];
const compra2 = ["mouse", "monitor"];

console.log("Ejercicio 08:");
console.log(calcularTotalCompra(catalogo, compra));
console.log(calcularTotalCompra(catalogo, compra2));