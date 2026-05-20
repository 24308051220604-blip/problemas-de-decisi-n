function pago(){

    let b = parseFloat(document.getElementById("b").value);

    let h = parseFloat(document.getElementById("h").value);

    let sueldo = 0;

    if (isNaN(b) || isNaN(h)) {
        document.getElementById("result").textContent =
        "Ingrese valores válidos";
        return;
    }

    if (b <= 40) {

        sueldo = b * h;

    } 
    else if (b <= 45) {

        let extras = b - 40;
        sueldo = (40 * h) + (extras * h * 2);

    } 
    else if (b <= 50) {

        let extrasDobles = 5;
        let extrasTriples = b - 45;

        sueldo = (40 * h) +
                 (extrasDobles * h * 2) +
                 (extrasTriples * h * 3);

    } 
    else {

        document.getElementById("result").textContent =
        "No se permiten más de 50 horas";
        return;
    }

    document.getElementById("result").textContent =
    "Sueldo semanal: $" + sueldo;
}