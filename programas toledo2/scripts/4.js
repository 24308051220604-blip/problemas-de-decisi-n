function estacionamiento(){

    let horas = parseFloat(document.getElementById("horas").value);

    let costo = 0;

    if (isNaN(horas)) {
        document.getElementById("result").textContent =
        "Ingrese horas válidas";
        return;
    }

    if (horas <= 2) {
        costo = horas * 5;
    }
    else if (horas <= 5) {
        costo = (2 * 5) + (horas - 2) * 4;
    }
    else if (horas <= 10) {
        costo = (2 * 5) + (3 * 4) + (horas - 5) * 3;
    }
    else {
        costo = (2 * 5) + (3 * 4) + (5 * 3) + (horas - 10) * 2;
    }

    document.getElementById("result").textContent =
    "Costo total: $" + costo;
}