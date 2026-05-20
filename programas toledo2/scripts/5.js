function menorEdad(){

    let e1 = parseFloat(document.getElementById("e1").value);
    let e2 = parseFloat(document.getElementById("e2").value);
    let e3 = parseFloat(document.getElementById("e3").value);

    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;

    let nombreMenor = "";
    let menor = 0;

    if (isNaN(e1) || isNaN(e2) || isNaN(e3)) {
        document.getElementById("result").textContent =
        "Ingrese edades válidas";
        return;
    }

    if (e1 <= e2 && e1 <= e3) {
        menor = e1;
        nombreMenor = n1;
    }
    else if (e2 <= e1 && e2 <= e3) {
        menor = e2;
        nombreMenor = n2;
    }
    else {
        menor = e3;
        nombreMenor = n3;
    }

    document.getElementById("result").textContent =
    "El menor es: " + nombreMenor + " con " + menor + " años";
}