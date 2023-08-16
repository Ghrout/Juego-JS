const apiUrl = `https://rps101.pythonanywhere.com/api/v1/objects/all`
let jugador1 = document.getElementById("jugador__1");
let jugador2 = document.getElementById("jugador__2");
let btn_jugar = document.getElementById("accion__button");
let result = document.getElementById("result");
let loser = document.getElementById("loser");


async function obtenerRespuestas() {
    let opciones = await fetch(apiUrl);
    let opcionesParseadas = await opciones.json();
    let html = "";
    opcionesParseadas.forEach((opciones_jugador1) => {
        let opcion_jugador1 = `<option value="${opciones_jugador1}">
            ${opciones_jugador1}
        </option>`;

        html += opcion_jugador1;
    })
    jugador1.innerHTML = html;
    jugador2.innerHTML = html;
}

obtenerRespuestas();
btn_jugar.addEventListener("click", clickfunction);

async function clickfunction() {
    let parametro1 = jugador1.value;
    let parametro2 = jugador2.value;
    const apiUrl2 = `https://rps101.pythonanywhere.com/api/v1/match?object_one=${parametro1}&object_two=${parametro2}`;
    let resultado = await fetch(apiUrl2);
    let resultadoParseado = await resultado.json();
    result.innerHTML = `<p> El ganador es: ${resultadoParseado.winner}</p>`;
    loser.innerHTML = `<p>El perdedor es: ${resultadoParseado.loser}</p>`
}
obtenerRespuestas();


