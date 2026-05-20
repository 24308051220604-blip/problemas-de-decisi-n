function trabajador(){

    // b = años de antigüedad
    let b = parseFloat(document.getElementById("b").value);

    let bono = 0;

    // Validación
    if (isNaN(b)) {
        document.getElementById("result").textContent =
        "Ingrese un número válido de años";
        return;
    }

    // Cálculo del bono
    if (b >= 1 && b <= 5) {
        bono = b * 100;
    }
    else if (b > 5) {
        bono = 1000;
    }
    else {
        bono = 0;
    }

    // Mostrar resultado
    document.getElementById("result").textContent =
    "El bono del trabajador es: $" + bono;
}