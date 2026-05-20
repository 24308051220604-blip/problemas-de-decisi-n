function voto() {

    let edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad)) {
        document.getElementById("result").textContent =
            "Por favor ingrese una edad válida";
        return;
    }

    // Verificar si puede votar
    if (edad >= 18) {
        document.getElementById("result").textContent =
            "Puede votar en las próximas elecciones";
    } else {
        document.getElementById("result").textContent =
            "No puede votar en las próximas elecciones";
    }
}