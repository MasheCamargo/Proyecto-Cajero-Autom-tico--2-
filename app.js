//Arreglo con las cuentas
const listAccounts = [
  { nombre: "Mali", saldo: 200 },
  { nombre: "Gera", saldo: 290 },
  { nombre: "Maui", saldo: 67 },
];

//variables.
let currentAccount;

// Autenticación
function login() {
  let accountIndex = document.getElementById("accounts").value;
  let password = document.getElementById("password").value;

  if (password === "123456") {
    currentAccount = listAccounts[accountIndex];
    document.getElementById("user_account").textContent = currentAccount.nombre;
    document.getElementById("balance").textContent =
      "Saldo actual: $" + currentAccount.saldo.toFixed(2);
    document.getElementById("login").style.display = "none";
    document.getElementById("operations").style.display = "flex";
  } else {
    document.getElementById("message").textContent =
      "Contraseña incorrecta. Inténtalo nuevamente.";
  }
}

//Analizar el balance
function checkBalance() {
  document.getElementById("balance").textContent =
    "Saldo actual: $" + currentAccount.saldo.toFixed(2);
  document.getElementById("balance").style.display = "flex";
}

//Ingresar valor
function enterAmount() {
  let amount = prompt("Ingresa el valor a ingresar:");
  amount = parseFloat(amount);
  console.log(currentAccount.saldo);

  if (amount && amount > 0 && amount <= 990 && currentAccount.saldo + amount <= 990) {
    currentAccount.saldo += amount;
    document.getElementById("balance").textContent =
      "Nuevo saldo: $" + currentAccount.saldo.toFixed(2);
    document.getElementById("balance").style.display = "none";
    updateHistory("Ingresó", amount);
  } else {
    alert("Valor excede los límites de tu cuenta de ahorros");
  }

}

//Retirar valor
function withdrawAmount() {
  let amount = prompt("Ingresa el valor a retirar:");
  amount = parseFloat(amount);

  if (
    amount &&
    amount > 0 &&
    amount <= currentAccount.saldo &&
    currentAccount.saldo - amount >= 1
  ) {
    currentAccount.saldo -= amount;
    document.getElementById("balance").textContent =
      "Nuevo saldo: $" + currentAccount.saldo.toFixed(2);
    document.getElementById("balance").style.display = "none";
    updateHistory("Retiró", amount);
  } else {
    alert("No puedes realizar este retiro, saldo insuficiente");
  }
}

//Historial de transacciones
function updateHistory(tipo, amount) {
  let history = document.getElementById("history");
  let transaction = document.createElement("li");
  transaction.textContent = tipo + ": $" + amount.toFixed(2);
  history.appendChild(transaction);
}
