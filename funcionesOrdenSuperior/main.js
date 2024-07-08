//ejercicio 1
// // Convierta la siguiente función nombrada en una función de flecha :

// //            función printMessage( mensaje ) {

// //                     console.log( mensaje )

// //            }

// // Elimina la palabra clave function.
// // Elimina el nombre de la función.
// // Añade una flecha (=>) después de los parámetros.
// // Si la función tiene solo una instrucción, puedes omitir las llaves {} y la instrucción return.

// const printMessage = (mensaje) => {
//     console.log(mensaje);
// };
// //ejercicio 2
// //2. Convierta la siguiente función nombrada en una función de flecha :

// // función createMultplication (número1, número2) {

// //     sea ​​resultado = numero1 * numero2

// //     devolver resultado

// // }
// const createMultiplication = (numero1,numero2) =>{
//     let resultado = numero1 * numero2;
//     return resultado;
// }

// console.log(createMultiplication(2,9));

// //ejercicio 3
// //Partiendo de un array: const array = [ 1,2,3,4,5,6,7,8,9 ], aplicar un map a ese array
// // y pasar como argumento la función nombrada mostrada en el ejercicio anterior. Mostrar por
// // consola el nuevo array obtenido.

// const array = [1,2,3,4,5,6,7,8,9];

// let nuevoARRAY = array.map(numero => createMultiplication(numero,3))
// console.log(nuevoARRAY);


// //ejercico 4
// //Generar una función que reciba un array de cervezas como parámetro y devuelva un nuevo array
// // con las 10 cervezas con mayor contenido de alcohol

// let topCervezas = (arrayCervezas)=>{
//     return arrayCervezas.sort((a, b) => b.abv - a.abv).slice(0, 10);
//             }



// console.log(topCervezas(beers));
// let retornoCervezas = topCervezas(beers);
// console.log(retornoCervezas);

// //ejercicio 5
// //Generar una función que reciba un array de cervezas como parámetro y devuelva un nuevo
// // array con las 10 cervezas menos amargas.

// const obtenerTop10CervezasMenosAmargas = (cervezas) => {
//     // Ordenamos las cervezas por amargor (menor a mayor)
//     const cervezasOrdenadas = cervezas.sort((a, b) => a.ibu - b.ibu);

//     // Tomamos las primeras 10 cervezas del array ordenado (las menos amargas)
//     const top10CervezasMenosAmargas = cervezasOrdenadas.slice(0, 10);

//     // Devolvemos el nuevo array con las 10 cervezas menos amargas
//     return top10CervezasMenosAmargas;
// };

//ejercicio 6
//Generar una función que reciba como parámetros un array de cervezas y el nombre de una 
//cerveza. La función debe devolver el objeto completo que coincida con el nombre ingresado

// const buscarNombre = (arrayBeers, nombre)=>{// no hay diferencia entre funcion flecha que las comunes
//     let buscarNOMBREE2 = arrayBeers.find(buscarNOMBREE2 => buscarNOMBREE2.nombre === nombre)
//     return buscarNOMBREE2 || null ;
// }

// const nombreAbuscar = "Buzz";
// const nombreDeCerveza = buscarNombre(beers, nombreAbuscar);
// console.log(nombreDeCerveza);
// const buscarCervezaPorNombre = (arrayCervezas, nombre) => {
//     // Utilizamos find para buscar la cerveza por su nombre
//     const cervezaEncontrada = arrayCervezas.find(cervezaEncontrada => cervezaEncontrada.nombre === nombre);
//     // Devolvemos la cerveza encontrada o null si no se encontró ninguna
//     return cervezaEncontrada || null;
// };

// // Nombre de la cerveza a buscar
// const nombreABuscar = "Trashy Blonde";

// // Llamamos a la función buscarCervezaPorNombre con el array de cervezas y el nombre a buscar
// const cervezaBuscada = buscarCervezaPorNombre(beers, nombreABuscar);

// // Mostramos el resultado en la consola
// console.log(cervezaBuscada);

//ejercicio 7
//7. Generar una función que reciba como parámetro un array de cervezas, un valor y que retorne
// el primer objeto cuya propiedad ibu sea igual al valor ingresado, en caso de que no exista
// una cerveza con ese ibu que muestre un mensaje en la consola que diga “No existe ninguna
// cerveza con un ibu de (valor ingresado)

// let buscarCervezaPorIBU = (arrayCervezas, ibu)=>{
//     let encontrarCerveza = arrayCervezas.find(encontrarCerveza => encontrarCerveza.ibu === ibu)
//     if(!encontrarCerveza){
//         console.log("no existe ninguna cerveza con ese IBU");
//     }
//     return encontrarCerveza || null
// }

// const valorAbuscarR = 41.5;
// const cervezaBuscadaa = buscarCervezaPorIBU(beers, valorAbuscarR);
// console.log(cervezaBuscadaa);

// Definición del array de cervezas (simulado para este ejemplo)


// Función para buscar una cerveza por su IBU en el array de cervezas
// const buscarCervezaPorIBU = (arrayCervezas, ibu) => {
//     // Utilizamos find para buscar la primera cerveza que coincida con el valor de ibu
//     const cervezaEncontrada = arrayCervezas.find(cerveza => cerveza.ibu === ibu);

//     // Si no se encontró ninguna cerveza con ese ibu, mostramos un mensaje en la consola
//     if (!cervezaEncontrada) {
//         console.log(`No existe ninguna cerveza con un ibu de ${ibu}`);
//     }

//     // Retornamos la cerveza encontrada (o undefined si no se encontró ninguna)
//     return cervezaEncontrada || null;
// };

// // Valor de IBU a buscar
// const valorABuscar = 41.5;

// // Llamada a la función buscarCervezaPorIBU con el array de cervezas y el valor a buscar
// const cervezaBuscada = buscarCervezaPorIBU(beers, valorABuscar);

// // Mostramos el resultado en la consola
// console.log(cervezaBuscada);

// //ejercicio 8
// //





// //ejercicio 9
// //

// // Definición del array de cervezas (simulado para este ejemplo)


// // Función que filtra las cervezas según el nivel máximo de alcohol (abv)
// const cervezasNoSuperanAlcohol = (arrayCervezas, maxAlcohol) => {
//     // Utilizamos el método filter para obtener las cervezas que no superan el nivel de alcohol
//     const cervezasFiltradas = arrayCervezas.filter(cerveza => cerveza.abv <= maxAlcohol);

//     // Creamos un nuevo array con objetos que contengan las propiedades nombre, abv y ibu
//     const resultado = cervezasFiltradas.map(cerveza => ({
//         name: cerveza.name,
//         abv: cerveza.abv,
//         ibu: cerveza.ibu
//     }));

//     // Retornamos el resultado final
//     // return resultado;
//     return resultado;
// };

// // Valor máximo de alcohol a filtrar
// const maxAlcohol = 4.5;

// // Llamada a la función cervezasNoSuperanAlcohol con el array de cervezas y el valor máximo de alcohol
// const cervezasFiltradas = cervezasNoSuperanAlcohol(beers, maxAlcohol);

// // Mostramos el resultado en la consola
// console.log(cervezasFiltradas);

// //ejercicio 10
// //10. Generar una función que reciba como parámetros un array de cervezas, un nombre de
// // propiedad y un valor booleano. Deberá devolver un nuevo array con 10 cervezas ordenadas
// // por la propiedad ingresada como segundo argumento, en orden ascendente si la tercera es
// // verdadera o descendente si es falsa.
// let beersOrdered = (arrayBeers, property, boolean) => {
//     let ordered = arrayBeers
//         .filter((beer) => beer[property])
//         .toSorted((a, b) => {
//             if (a[property] < b[property]) {
//                 return -1;
//             } else if (a[property] > b[property]) {
//                 return 1;
//             } else return 0;

//         });
//     if (boolean) {
//         return ordered.slice(0, 10);
//     }
//     return ordered.reverse().slice(0, 10);
// };
// console.log(beersOrdered(beers, "abv", true));
// console.log(beersOrdered(beers, "abv", false));


// const ordenarCervezasPorPropiedad =(arrayCervezas, propiedadNombre, esVerdadero)=>{
//     const comparacionDeFuncion =(a,b) =>{
//         if(esVerdadero){
//             return  b[propiedadNombre] - a[propiedadNombre]
//         }
//     }
// }








//ejercicio 1
// Convert the following named function to an arrow function:

// function printMessage( message ) {

//     console.log( message )

// }
//funcion convertida a funcion flecha
// (messege) =>
//     console.log(messege);

// // ejercicio 2
// // Convierta la siguiente función nombrada en una función de flecha :

// function createMultplication(numero1, numero2) {
//     return numero1 * numero2;
// }

// let multiplicar2NUMEROS = (numero1, numero2) => {
//     let resultado = numero1 * numero2;
//     return resultado
// }
// //ejercicio 3
// //Partiendo de un array: const array = [ 1,2,3,4,5,6,7,8,9 ], aplicar un map a ese array
// // y pasar como argumento la función nombrada mostrada en el ejercicio anterior. Mostrar
// // por consola el nuevo array obtenido.
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// //elemento' es el parametro que usa la funcion flecha
// //la flechita es solo sintaxis
// //llama a la funcion 'multiplicar2Numeros' Y PASA COMO PARAMETRO elemento
// //(o sea los elementos dentro de 'array de numeros') y el otro valor es el numero a multiplicar
// /* let nuevo = array.map(function(elemento) {
//     return multiplicar2NUMEROS(elemento, 3);
// }); */ //.map(e, i, a)

// const aux = array.map(multiplicar2NUMEROS);
// console.log(aux);
// //asi quedaria transformado en funcion flecha
// let nuevoo = array.map(elemento => multiplicar2NUMEROS(elemento, 3));

//ejercicio 4
//Generar una función que reciba un array de cervezas como parámetro y devuelva un nuevo array con las 10 cervezas con mayor contenido de alcohol.

/* function parameters (a,b) {
    return b.abv - a.abv
} */

// const beersOrganized = beers.sort((a, b) => b.abv - a.abv);
// // const beersOrganized = beers.sort(parameters);
// console.log(beersOrganized);

// const top10beers = beersOrganized.slice(0, 10);
// console.log(top10beers);

// //ejercicio 5
// // Generar una función que reciba un array de cervezas como parámetro y devuelva un nuevo array con las 10 cervezas menos amargas.

// let diezCERVEZAS = beers.filter(beer => beer.abv < 6).slice(0, 10)
// console.log(diezCERVEZAS);

// //ejercicio 6
// //Generar una función que reciba como parámetros un array de cervezas y el nombre de una cerveza. La función debe devolver el objeto completo que coincida con el nombre ingresado.

// // let nombreDeObjeto = (arrayCervezas,nombre)=>{
// //     let variable;
// //     arrayCervezas.forEach(cerveza => {
// //         if(cerveza.name == nombre){
// //             variable = cerveza;
// //         }
// //     });    
// //     return variable
// // }

// // console.log(nombreDeObjeto(beers,"Buzz")); 

// //la flechitas significas las llaves ("lineas de ejecucion") o cuerpo de la funcion
// let nombreCerveza = (esteEsElArrayCerveza, nombre) => esteEsElArrayCerveza.filter(beer => beer.name == nombre)

// console.log(nombreCerveza(beers, "Buzz"));


// //ejercicio 7
// //Generar una función que reciba como parámetro un array de cervezas, un valor y que retorne el primer objeto cuya propiedad ibu sea igual al valor ingresado, en caso de que no exista una cerveza con ese ibu que muestre un mensaje en la consola que diga “No existe ninguna cerveza con un ibu de (valor ingresado)”.

// let cualquierVariable = (arrayCERVEZAS, VALOR) => {

//     let guardarFIND = arrayCERVEZAS.find(cerveza => cerveza.ibu == VALOR)
//     if (guardarFIND) {
//         console.log(guardarFind);
//     } else {
//         console.log("no se encontro");
//     }
// }

//EJERCICIO 8
// Generar una función que reciba como parámetro el nombre de una cerveza y devuelva la posición en el array de dicha cerveza. Si no se encuentra la cerveza se debe imprimir un mensaje por consola que diga “(Nombre de la cerveza ingresada) no existe”

let encontrarNombre = (arrayCERVEZAS, nombreDeCervezas)=>{
    let INDICE = arrayCERVEZAS.findIndex(cerveza=> cerveza.name === nombreDeCervezas)

    if(INDICE !== -1){
        return INDICE
    }else{
        console.log("no se ha encontrado la cerveza");
    }
}
console.log(encontrarNombre(beers,"Buzz"));
console.log(encontrarNombre(beers,"asdad"));

//PREGUNTAR A GUILLE

















