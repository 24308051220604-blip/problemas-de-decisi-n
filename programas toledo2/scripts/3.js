function regalo(){

    let costo = parseFloat(document.getElementById("costo").value);

    let resultado = "";

    if (isNaN(costo)) {
        document.getElementById("result").textContent =
        "Ingrese un costo válido";
        return;
    }

    if (costo <= 10) {
        resultado = "Regalo: Tarjeta";
    }
    else if (costo >= 11 && costo <= 100) {
        resultado = "Regalo: Chocolates";
    }
    else if (costo >= 101 && costo <= 250) {
        resultado = "Regalo: Flores";
    }
    else {
        resultado = "Regalo: Anillo";
    }

    // Mostrar resultado
    document.getElementById("result").textContent = resultado;
}