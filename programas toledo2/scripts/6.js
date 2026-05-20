function descuento(){

    let precio = parseFloat(document.getElementById("precio").value);

    let desc = 0;
    let total = 0;

    if (isNaN(precio)) {
        document.getElementById("result").textContent =
        "Ingrese un precio válido";
        return;
    }

    if (precio >= 200) {
        desc = precio * 0.15;
    }
    else if (precio > 100) {
        desc = precio * 0.12;
    }
    else {
        desc = precio * 0.10;
    }

    total = precio - desc;

    document.getElementById("result").textContent =
    "Descuento: $" + desc + " | Total a pagar: $" + total;
}