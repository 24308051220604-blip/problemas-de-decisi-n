function beca(){

    let edad = parseFloat(document.getElementById("edad").value);
    let promedio = parseFloat(document.getElementById("promedio").value);

    let resultado = "";

    if (isNaN(edad) || isNaN(promedio)) {
        document.getElementById("result").textContent =
        "Ingrese valores válidos";
        return;
    }

    if (edad > 18) {

        if (promedio >= 9) {
            resultado = "Beca: $2000";
        }
        else if (promedio >= 7.5) {
            resultado = "Beca: $1000";
        }
        else if (promedio >= 6) {
            resultado = "Beca: $500";
        }
        else {
            resultado = "Carta de invitación a estudiar más";
        }

    } else {

        if (promedio >= 9) {
            resultado = "Beca: $3000";
        }
        else if (promedio >= 8) {
            resultado = "Beca: $2000";
        }
        else if (promedio >= 6) {
            resultado = "Beca: $100";
        }
        else {
            resultado = "Carta de invitación a estudiar más";
        }
    }
    document.getElementById("result").textContent = resultado;
}