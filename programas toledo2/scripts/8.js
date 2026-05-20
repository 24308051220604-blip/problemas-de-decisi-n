function pago(){

    // Leer valores (misma base que tú usas)
    let b = parseFloat(document.getElementById("b").value); // antigüedad
    let h = parseFloat(document.getElementById("h").value); // sueldo

    let bonoAnt = 0;
    let bonoSueldo = 0;
    let bonoFinal = 0;

    // Validación
    if (isNaN(b) || isNaN(h)) {
        document.getElementById("result").textContent =
        "Ingrese valores válidos";
        return;
    }

    // Bono por antigüedad
    if (b > 2 && b < 5) {
        bonoAnt = h * 0.20;
    } 
    else if (b >= 5) {
        bonoAnt = h * 0.30;
    }

    // Bono por sueldo
    if (h < 1000) {
        bonoSueldo = h * 0.25;
    }
    else if (h <= 3500) {
        bonoSueldo = h * 0.15;
    }
    else {
        bonoSueldo = h * 0.10;
    }

    // Elegir el mayor bono
    if (bonoAnt > bonoSueldo) {
        bonoFinal = bonoAnt;
    } else {
        bonoFinal = bonoSueldo;
    }

    // Mostrar resultado
    document.getElementById("result").textContent =
    "Bono por antigüedad: $" + bonoAnt +
    " | Bono por sueldo: $" + bonoSueldo +
    " | Bono asignado: $" + bonoFinal;
}