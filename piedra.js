let puntosJugador = 0;
let puntosMaquina = 0;

function jugar(eleccionJugador) {

    const opcionesMaquina = ['piedra', 'papel', 'tijera'];


    const eleccionMaquina = opcionesMaquina[Math.floor(Math.random() *
        3)];
    console.log(eleccionMaquina);
    let resultado;

    if (eleccionJugador == eleccionMaquina) {
        resultado = "Empate";

    } else if (//gana jugador
        (eleccionJugador === 'piedra' && eleccionMaquina === 'tijera')||
        (eleccionJugador === 'papel' && eleccionMaquina === 'piedra')||
        (eleccionJugador === 'tijera'&& eleccionMaquina === 'papel'))
    {
        resultado = "Ganaste";
        puntosJugador++;

    }else {
        resultado = "perdiste!";
        puntosMaquina++;

    }
    const emojis = {
        piedra: '🗿',
        papel: '📃',
        tijera: '✂'
    }

    document.getElementById('result').innerHTML = `
    Tu elección: ${emojis[eleccionJugador]} vs Computadora: ${emojis[eleccionMaquina]} ${resultado}
    `
    document.getElementById('score').textContent = `
    Jugador: ${puntosJugador} | ${puntosMaquina};
    `
}