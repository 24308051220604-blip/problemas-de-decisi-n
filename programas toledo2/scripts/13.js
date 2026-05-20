function escuela(){

    // b = número de alumnos
    let b = parseFloat(document.getElementById("b").value);

    let costo = 0;

    if (isNaN(b)) {
        document.getElementById("result").textContent =
        "Ingrese un número válido de alumnos";
        return;
    }

    if (b > 100) {
        costo = 20;
    }
    else if (b >= 50) {
        costo = 35;
    }
    else if (b >= 20) {
        costo = 40;
    }
    else {
        costo = 70;
    }

    document.getElementById("result").textContent =
    "Costo por alumno: $" + costo;
}