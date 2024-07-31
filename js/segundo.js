function calcular2() {
    console.log("calcular");


    let num1 = Number(document.getElementById("recuadro1").value);
    let num2 = Number(document.getElementById("recuadro2").value);
    let operator = document.getElementById("operator").value;
    let resultadoTxt;
    let estado=true;
    switch (operator) {
        case `+`:
            resultadoTxt = num1 + num2;
            break;
        case `-`:
            resultadoTxt = num1 - num2;
            break;
        case `*`:
            resultadoTxt = num1 * num2;
            break;

        case `/`:
            if (num2 <= 0) {
                estado=false;
                alert("NO SE PUEDE DIVIDIR POR 0");
            } else {
                resultadoTxt = num1 / num2;
            }
            break;
    }

    if (estado==true) {
        document.getElementById("resultado").textContent = `el  resultado:  ${num1} ${operator} ${num2} = ${resultadoTxt}`;
    }
    
}
function limpiar() {
    console.log("limpiando");

    document.getElementById("recuadro1").value = "";
    document.getElementById("recuadro2").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("resultado").textContent = "";
}
