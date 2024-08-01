


function generarfrase(){

    let frases = [ 
        "Cree en ti mismo y en tus sueños",
        "Cada paso cuenta hacia tu objetivo",
        "Supera tus limites, descubre tu verdadero potencial",
        "La perseverancia transforma sueños en realidades",
        "El esfuerzo de hoy es la cosecha del mañana",
    ];

    let aleatorio = Math.random () * frases.length;
    aleatorio = Math.floor(aleatorio);           
    console.log(aleatorio);

    console.log( `Tu frase es: ${frases[aleatorio]}`);
    document.getElementById("resultado").textContent = `Tu frase es: ${frases[aleatorio]}`;



}
