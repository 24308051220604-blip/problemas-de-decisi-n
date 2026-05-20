function trallectoria(){

    let b = document.getElementById("b").value;

    let h = parseFloat(document.getElementById("h").value);

    let km = 0;
    let total = 0;
    let mensaje = "";

    if (isNaN(h)) {
        document.getElementById("result").textContent =
        "Ingrese un costo válido por km";
        return;
    }

    if (b === "Mexico") {
        km = 750;
    }
    else if (b === "PV") {
        km = 800;
    }
    else if (b === "Acapulco") {
        km = 1200;
    }
    else if (b === "Cancun") {
        km = 1800;
    }
    else {
        document.getElementById("result").textContent =
        "Destino no válido. Se queda en casa.";
        return;
    }

    total = km * 2 * h;

    document.getElementById("result").textContent =
    "Destino: " + b + " | Total viaje: $" + total;
}