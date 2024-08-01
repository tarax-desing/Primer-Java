//objetos en javaS  si vemos llaves es un objeto
// let nombre = [`pepe`,

// ]

// let persona = {
//     nombre: `papa`,
//     edad: 28,
//     ciudad: `Granada`
// };
// console.log(persona.nombre);

// let  alumnos = [
//     {
//         nombre: `Frank`, edad: 18, ciudad: `Granada`
//     };
// {
//     nombre: `Antonio`, edad: 20, ciudad: `Maracena`
// };

// {
//     nombre: `Simón`, edad: 23, ciudad: `Jaén`
// };
// {
//     nombre: `María`, edad: 26, ciudad: `Almeria`
// };

// ];
// console.log(alumnos);
// alumnos.forEach(alumno => {
//     console.log(alumno.nombre + " " + alumno.edad);
// });
const citas = [
    {
        cita:"El tiempo es oro", 
        autor:"Benjamin Franklin"
    },
    {
        cita:"La imaginación es más importante que el conocimiento", 
        autor:"Albert Einstein"
    },
    {
        cita:"La vida es sueño.", 
        autor:" Pedro Calderón de la Barca"
    },
    {
        cita:"Pienso, luego existo", 
        autor:"René Descartes"
    },
    {
        cita:"El conocimiento es poder.", 
        autor:" Francis Bacon"
    },

]
console.log(citas)
function frasesFamosas() {


let aleatorio = Math.random () * citas.length;
aleatorio = Math.floor(aleatorio);           
console.log(aleatorio);

console.log( citas[aleatorio].cita);
document.getElementById("cuadro").textContent = citas[aleatorio].cita;
document.getElementById("txtautor").textContent = citas[aleatorio].autor;



}