function sueldo() {

    let horas = parseFloat(document.getElementById("horas").value);
    let sueldo = parseFloat(document.getElementById("sueldo").value);

    let total;

    if (isNaN(horas) || isNaN(sueldo)) {
        document.getElementById("result").textContent =
            "Ingrese valores válidos";
        return;
    }

    if (horas <= 40) {

        total = horas * sueldo;

    } else {

        let extras = horas - 40;

        total = (40 * sueldo) + (extras * sueldo * 2);
    }

    document.getElementById("result").textContent =
        "El sueldo semanal es: $" + total;
}