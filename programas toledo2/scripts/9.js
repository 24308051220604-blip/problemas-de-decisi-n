function licencia(){

    // b = tipo de póliza (A o B)
    let b = document.getElementById("b").value;

    // h = edad
    let h = parseFloat(document.getElementById("h").value);

    let costo = 0;
    let cargo = 0;
    let total = 0;

    if (isNaN(h)) {
        document.getElementById("result").textContent =
        "Ingrese una edad válida";
        return;
    }

    // costo base
    if (b === "A" || b === "a") {
        costo = 1200;
    } else {
        costo = 950;
    }

    let alcohol = 0;     // 1 si, 0 no
    let lentes = 0;     // 1 si, 0 no
    let enfermedad = 0; // 1 si, 0 no


    if (alcohol === 1) {
        cargo += 0.10;
    }

    if (lentes === 1) {
        cargo += 0.05;
    }

    if (enfermedad === 1) {
        cargo += 0.05;
    }

    if (h > 40) {
        cargo += 0.20;
    } else {
        cargo += 0.10;
    }

    total = costo + (costo * cargo);

    document.getElementById("result").textContent =
    "Costo total de póliza: $" + total;
}