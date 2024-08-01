//declacar arrays

// //entre corchetes  []
let frutas = [
    `manzana`,
    `pera`,
]
// console.log(frutas);
// console.table(frutas);

// console.log(frutas[0]);
// //los elementos aquí, se empiezan a contar desde 0.

// //ahora para cambiar un elemento existente por otro.
// frutas[0] = `sandia`;


// //añadir elemt.
// frutas[2] =`,melocotón`;
// console.table(frutas);


// frutas.push(`fresas`);  //añade elemt al final
// console.table(frutas);

// console.log(/frutas.length);  //para saber la longitud del array

// //bucles
// for(indice de InputDeviceInfo,condicion,incremento){
//     código a ejecutar
// }

// for (let i = 10; i <= 10; i++) {
//     console.log(i);
// }
// for (let i = 0; i < array.lengt; i++) {
//     console.log(frutas[i]);

// }

frutas.forEach(fruta => {
    console.log(fruta);
});
frutas.forEach((fruta, indice,array) =>  {
    console.log(array);
})
// random
let aleatorio = Math.random ()* 10 ;
aleatorio = Math.floor(aleatorio);            //para que no saque decimales
console.log(aleatorio);

let numeros = [ 34, 56, 89, 12, 87, 58, 74, 332, 60, 15];
console.log( `el número ganador es: ${numeros[aleatorio]}`);