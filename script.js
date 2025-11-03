//Ejercicio 03
function ejercicio03() {
    function doblarNumeros(arr) {
        let resultado = [];
        for (let i = 0; i < arr.length; i++) {
            resultado.push(arr[i] * 2);
        }
        return resultado;
    }
    console.log("Ejercicio 03:");
    console.log(doblarNumeros([0, -9, 5, 84]));
}
ejercicio03();

//Ejercicio04
function ejercicio04() {
    function filtrarYTransformar(arr) {
        let suma = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 0) {
                suma += arr[i] * arr[i];
            }
        }
        return suma;
    }
    console.log("Ejercicio 04:");
    console.log(filtrarYTransformar([2, -3, 4, -1, 5]));
}
ejercicio04();

//Ejercicio05
function ejercicio05() {
    function reordenarPalabras(oracion) {
        let palabras = oracion.split(" ");
        let mayusculas = [];
        for (let i = 0; i < palabras.length; i++) {
            mayusculas.push(palabras[i].toUpperCase());
        }
        return mayusculas.sort();
    }
    console.log("Ejercicio 05:");
    console.log(reordenarPalabras("sol luna estrella planeta"));
}
ejercicio05();

//Ejercicio06
function ejercicio06() {
    let nombres = ["Ana", "Juan", "Ana", "Luis"];
    let conjunto = new Set(nombres);
    console.log("Ejercicio 06:");
    console.log(conjunto);
}
ejercicio06();

//Ejercicio07
function ejercicio07() {
    function tieneDuplicados(arr) {
        let visto = new Set();
        for (let i = 0; i < arr.length; i++) {
            if (visto.has(arr[i])) return true;
            visto.add(arr[i]);
        }
        return false;
    }
    console.log("Ejercicio 07:");
    console.log(tieneDuplicados([1, 2, 2, 3]));
    console.log(tieneDuplicados([1, 2, 3]));
}
ejercicio07();

//Ejercicio08
function ejercicio08() {
    let productos = new Map();
    productos.set("laptop", 3500);
    productos.set("mouse", 100);
    productos.set("teclado", 250);
    
    let compras = ["laptop", "mouse"];
    let total = 0;
    for (let i = 0; i < compras.length; i++) {
        if (productos.has(compras[i])) {
            total += productos.get(compras[i]);
        }
    }
    console.log("Ejercicio 08:");
    console.log(total);
}
ejercicio08();

//Ejercicio09
function ejercicio09() {
    function contarPalabras(texto) {
        let palabras = texto.toLowerCase().split(" ");
        let mapa = new Map();
        for (let i = 0; i < palabras.length; i++) {
            let p = palabras[i];
            if (mapa.has(p)) {
                mapa.set(p, mapa.get(p) + 1);
            } else {
                mapa.set(p, 1);
            }
        }
        return mapa;
    }
    console.log("Ejercicio 09:");
    console.log(contarPalabras("sol luna sol sol estrella luna"));
}
ejercicio09();

//Ejercicio10
function ejercicio10() {
    function invertirMap(map) {
        let nuevo = new Map();
        let claves = map.keys();
        let valores = map.values();
        let arrClaves = [...claves];
        let arrValores = [...valores];
        for (let i = 0; i < arrClaves.length; i++) {
            nuevo.set(arrValores[i], arrClaves[i]);
        }
        return nuevo;
    }
    let capitales = new Map([["Perú", "Lima"], ["Chile", "Santiago"]]);
    console.log("Ejercicio 10:");
    console.log(invertirMap(capitales));
}
ejercicio10();

//Ejercicio11
function ejercicio11() {
    let auto = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2020,
        detalles: function() {
            console.log(this.marca + " " + this.modelo + " " + this.año);
        }
    };
    console.log("Ejercicio 11:");
    auto.detalles();
}
ejercicio11();

//Ejercicio12
function ejercicio12() {
    function contarLetras(texto) {
        let obj = {};
        let minus = texto.toLowerCase();
        for (let i = 0; i < minus.length; i++) {
            let letra = minus[i];
            if (letra >= 'a' && letra <= 'z') {
                if (obj[letra]) {
                    obj[letra]++;
                } else {
                    obj[letra] = 1;
                }
            }
        }
        return obj;
    }
    console.log("Ejercicio 12:");
    console.log(contarLetras("banana"));
}
ejercicio12();

//Ejercicio13
function ejercicio13() {
    function combinarCatalogos(tiendaA, tiendaB) {
        let catalogo = {};

        for (let prod in tiendaA) {
            catalogo[prod] = tiendaA[prod];
        }

        for (let prod in tiendaB) {
            if (!catalogo[prod] || tiendaB[prod] < catalogo[prod]) {
                catalogo[prod] = tiendaB[prod];
            }
        }

        let resultado = {};
        for (let prod in catalogo) {
            resultado[prod] = parseFloat(catalogo[prod].toFixed(2));
        }
        return resultado;
    }
    let tiendaA = { laptop: 3500.5, mouse: 100.35, teclado: 250.9 };
    let tiendaB = { mouse: 95.2, monitor: 720.457, teclado: 260.1 };
    console.log("Ejercicio 13:");
    console.log(combinarCatalogos(tiendaA, tiendaB));
}
ejercicio13();

//Ejercicio14
function ejercicio14() {
    function gestionarEmpleados(empleados) {
        let mapa = new Map();
        for (let i = 0; i < empleados.length; i++) {
            let emp = empleados[i];
            if (!mapa.has(emp.area)) {
                mapa.set(emp.area, { empleados: [], salarios: [] });
            }
            let datos = mapa.get(emp.area);
            datos.empleados.push(emp.nombre);
            datos.salarios.push(emp.salario);
        }
        let resultado = {};
        for (let [area, datos] of mapa) {
            let suma = 0;
            for (let j = 0; j < datos.salarios.length; j++) {
                suma += datos.salarios[j];
            }
            let promedio = suma / datos.salarios.length;
            resultado[area] = {
                empleados: datos.empleados,
                promedio: promedio
            };
        }
        return resultado;
    }
    const listaEmpleados = [
        { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
        { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
        { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
        { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
    ];
    console.log("Ejercicio 14:");
    console.log(gestionarEmpleados(listaEmpleados));
}
ejercicio14();