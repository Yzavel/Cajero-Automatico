var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
];

var saldoMinimo = 10;
var saldoMaximo = 990;
var cuentaActual = null;

document.getElementById("iniciarSesionBtn").addEventListener("click", function() {
    var seleccion = document.getElementById("cuenta").value;
    var password = document.getElementById("password").value;

    if (password === "1234") { // Password de ejemplo
        cuentaActual = cuentas[seleccion];
        document.getElementById("opciones").style.display = "block";
    } else {
        alert("Contraseña incorrecta. Inténtalo nuevamente.");
    }
});

document.getElementById("consultarSaldoBtn").addEventListener("click", function() {
    document.getElementById("resultado").innerHTML = "Saldo actual: $" + cuentaActual.saldo;
});

document.getElementById("ingresarMontoBtn").addEventListener("click", function() {
    var monto = parseFloat(prompt("Ingresa el monto a ingresar:"));

    if (isNaN(monto)) {
        alert("Monto inválido.");
        return;
    }

    cuentaActual.saldo += monto;
    document.getElementById("resultado").innerHTML = "Monto ingresado: $" + monto + "<br> Nuevo saldo: $" + cuentaActual.saldo;
});

document.getElementById("retirarMontoBtn").addEventListener("click", function() {
    var monto = parseFloat(prompt("Ingresa el monto a retirar:"));

    if (isNaN(monto)) {
        alert("Monto inválido.");
        return;
    }

    if (cuentaActual.saldo - monto < saldoMinimo) {
        alert("No puedes retirar este monto debido a la regla de negocio.");
        return;
    }

    if (cuentaActual.saldo - monto > saldoMaximo) {
        alert("No puedes retirar este monto debido a la regla de negocio.");
        return;
    }

    cuentaActual.saldo -= monto;
    document.getElementById("resultado").innerHTML = "Monto retirado: $" + monto + "<br> Nuevo saldo: $" + cuentaActual.saldo;
});