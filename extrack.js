let addamount = 0;
let removeamount = 0;
let saveamount = 0;
let localaddamount = 0;
let localexamount = 0;
let localsaveamount = 0
let redtotal = 0;

function incomebtn() {
  const formI = document.getElementById("incomeform");
  const formE = document.getElementById("expenseform");
  const formS = document.getElementById("saveform");
  if (formI.style.display === "block" || formE.style.display === "block" || formS.style.display === "block") {
    formI.style.display = "none"
    document.getElementById("guidtransaction").style.display = "block";

    document.getElementById("actionbtnE").disabled = false;

    document.getElementById("actionbtnS").disabled = false;

    document.getElementById("actionbtnA").disabled = false;
  }
  else {
    formI.style.display = "block"
    document.getElementById("guidtransaction").style.display = "none";

    document.getElementById("actionbtnE").disabled = true;

    document.getElementById("actionbtnS").disabled = true;

    document.getElementById("actionbtnA").disabled = true;
  }
}

function expensebtn() {
  const formE = document.getElementById("expenseform");
  const formI = document.getElementById("incomeform");
  const formS = document.getElementById("saveform");
  if (formE.style.display === "block" || formI.style.display === "block" || formS.style.display === "block") {
    formE.style.display = "none"
    document.getElementById("guidtransaction").style.display = "block";

    document.getElementById("actionbtnI").disabled = false;

    document.getElementById("actionbtnS").disabled = false;

    document.getElementById("actionbtnA").disabled = false;
  }
  else {
    formE.style.display = "block"
    document.getElementById("guidtransaction").style.display = "none";

    document.getElementById("actionbtnI").disabled = true;

    document.getElementById("actionbtnS").disabled = true;

    document.getElementById("actionbtnA").disabled = true;
  }
}

function savebtn() {
  const formS = document.getElementById("saveform");
  const formI = document.getElementById("incomeform");
  const formE = document.getElementById("expenseform");
  if (formI.style.display === "block" || formE.style.display === "block" || formS.style.display === "block") {
    formS.style.display = "none"
    document.getElementById("guidtransaction").style.display = "block";

    document.getElementById("actionbtnI").disabled = false;

    document.getElementById("actionbtnE").disabled = false;

    document.getElementById("actionbtnA").disabled = false;
  }
  else {
    formS.style.display = "block"
    document.getElementById("guidtransaction").style.display = "none";

    document.getElementById("actionbtnI").disabled = true;

    document.getElementById("actionbtnE").disabled = true;

    document.getElementById("actionbtnA").disabled = true;
  }
}

function addincome() {
  addamount = Number(document.getElementById("incomeamount").value);

  localaddamount = Number(localStorage.getItem("inamount")) || 0;
  localaddamount += addamount;

  let tb = Number(localStorage.getItem("totalbalance")) || 0;
  let tbb = tb + addamount;

  localStorage.setItem("inamount", localaddamount);
  localStorage.setItem("totalbalance", tbb);

  document.getElementById("income").innerHTML = "₹" + localaddamount;
  document.getElementById("balance").innerHTML = "₹" + tbb;

  document.getElementById("incomeamount").value = "";

  const formI = document.getElementById("incomeform");
  const formE = document.getElementById("expenseform");
  const formS = document.getElementById("saveform");
  if (formI.style.display === "block" || formE.style.display === "block" || formS.style.display === "block") {
    formI.style.display = "none"
    document.getElementById("guidtransaction").style.display = "block";

    document.getElementById("actionbtnE").style.backgroundColor = "red"
    document.getElementById("actionbtnE").style.border = "2px red solid"
    document.getElementById("actionbtnE").disabled = false;

    document.getElementById("actionbtnS").style.backgroundColor = "blue"
    document.getElementById("actionbtnS").style.border = "2px blue solid"
    document.getElementById("actionbtnS").disabled = false;

    document.getElementById("actionbtnA").style.backgroundColor = "rgb(161, 204, 42)"
    document.getElementById("actionbtnA").style.border = "2px rgb(161, 204, 42) solid"
    document.getElementById("actionbtnA").disabled = false;
  }
  else {
    formI.style.display = "block"
    document.getElementById("guidtransaction").style.display = "none";

    document.getElementById("actionbtnE").style.backgroundColor = "white"
    document.getElementById("actionbtnE").style.border = "2px white solid"
    document.getElementById("actionbtnE").disabled = true;

    document.getElementById("actionbtnS").style.backgroundColor = "white"
    document.getElementById("actionbtnS").style.border = "2px white solid"
    document.getElementById("actionbtnS").disabled = true;

    document.getElementById("actionbtnA").style.backgroundColor = "white"
    document.getElementById("actionbtnA").style.border = "2px white solid"
    document.getElementById("actionbtnA").disabled = true;
  }
  updaterange();
}

function addexpense() {

  removeamount = Number(document.getElementById("expeseamount").value);

  localexamount = Number(localStorage.getItem("examount")) || 0;
  localexamount += removeamount;

  let tb = Number(localStorage.getItem("totalbalance")) || 0;
  let redtotal = tb - removeamount;

  localStorage.setItem("examount", localexamount);
  localStorage.setItem("totalbalance", redtotal);

  document.getElementById("balance").innerHTML = "₹" + redtotal;
  document.getElementById("expense").innerHTML = "₹" + localexamount;

  document.getElementById("expeseamount").value = "";

  const formE = document.getElementById("expenseform");
  const formI = document.getElementById("incomeform");
  const formS = document.getElementById("saveform");
  if (formE.style.display === "block" || formI.style.display === "block" || formS.style.display === "block") {
    formE.style.display = "none"
    document.getElementById("guidtransaction").style.display = "block";

    document.getElementById("actionbtnI").style.backgroundColor = "green"
    document.getElementById("actionbtnI").style.border = "2px green solid"
    document.getElementById("actionbtnI").disabled = false;

    document.getElementById("actionbtnS").style.backgroundColor = "blue"
    document.getElementById("actionbtnS").style.border = "2px blue solid"
    document.getElementById("actionbtnS").disabled = false;

    document.getElementById("actionbtnA").style.backgroundColor = "rgb(161, 204, 42)"
    document.getElementById("actionbtnA").style.border = "2px rgb(161, 204, 42) solid"
    document.getElementById("actionbtnA").disabled = false;
  }
  else {
    formE.style.display = "block"
    document.getElementById("guidtransaction").style.display = "none";

    document.getElementById("actionbtnI").style.backgroundColor = "white"
    document.getElementById("actionbtnI").style.border = "2px white solid"
    document.getElementById("actionbtnI").disabled = true;

    document.getElementById("actionbtnS").style.backgroundColor = "white"
    document.getElementById("actionbtnS").style.border = "2px white solid"
    document.getElementById("actionbtnS").disabled = true;

    document.getElementById("actionbtnA").style.backgroundColor = "white"
    document.getElementById("actionbtnA").style.border = "2px white solid"
    document.getElementById("actionbtnA").disabled = true;
  }
  updaterange();
}

function addsaving() {

  saveamount = Number(document.getElementById("saveamount").value);

  localsaveamount = Number(localStorage.getItem("saveamount")) || 0;
  localsaveamount += saveamount;

  let tb = Number(localStorage.getItem("totalbalance")) || 0;
  let redtotal = tb - saveamount;

  localStorage.setItem("saveamount", localsaveamount);
  localStorage.setItem("totalbalance", redtotal);

  document.getElementById("saving").innerHTML = "₹" + localsaveamount;
  document.getElementById("balance").innerHTML = "₹" + redtotal;

  document.getElementById("saveamount").value = "";

  const formS = document.getElementById("saveform");
  const formI = document.getElementById("incomeform");
  const formE = document.getElementById("expenseform");
  if (formI.style.display === "block" || formE.style.display === "block" || formS.style.display === "block") {
    formS.style.display = "none"
    document.getElementById("guidtransaction").style.display = "block";

    document.getElementById("actionbtnI").style.backgroundColor = "green"
    document.getElementById("actionbtnI").style.border = "2px green solid"
    document.getElementById("actionbtnI").disabled = false;

    document.getElementById("actionbtnE").style.backgroundColor = "red"
    document.getElementById("actionbtnE").style.border = "2px red solid"
    document.getElementById("actionbtnE").disabled = false;

    document.getElementById("actionbtnA").style.backgroundColor = "rgb(161, 204, 42)"
    document.getElementById("actionbtnA").style.border = "2px rgb(161, 204, 42) solid"
    document.getElementById("actionbtnA").disabled = false;
  }
  else {
    formS.style.display = "block"
    document.getElementById("guidtransaction").style.display = "none";

    document.getElementById("actionbtnI").style.backgroundColor = "white"
    document.getElementById("actionbtnI").style.border = "2px white solid"
    document.getElementById("actionbtnI").disabled = true;

    document.getElementById("actionbtnE").style.backgroundColor = "white"
    document.getElementById("actionbtnE").style.border = "2px white solid"
    document.getElementById("actionbtnE").disabled = true;

    document.getElementById("actionbtnA").style.backgroundColor = "white"
    document.getElementById("actionbtnA").style.border = "2px white solid"
    document.getElementById("actionbtnA").disabled = true;
  }
  updaterange();
}

window.onload = function () {
  document.getElementById("income").innerHTML =
    "₹" + (localStorage.getItem("inamount") || 0);

  document.getElementById("expense").innerHTML =
    "₹" + (localStorage.getItem("examount") || 0);

  document.getElementById("balance").innerHTML =
    "₹" + (localStorage.getItem("totalbalance") || 0);

  document.getElementById("saving").innerHTML =
    "₹" + (localStorage.getItem("saveamount") || 0);

  updaterange();
}

function reset() {
  localStorage.removeItem("inamount");
  localStorage.removeItem("totalbalance");
  localStorage.removeItem("examount");
  localStorage.removeItem("saveamount");

  document.getElementById("balance").innerHTML = "₹0";
  document.getElementById("income").innerHTML = "₹0";
  document.getElementById("expense").innerHTML = "₹0";
  document.getElementById("saving").innerHTML = "₹0";

  document.getElementById("balance").innerHTML = "₹0";
  document.getElementById("income").innerHTML = "₹0";
  document.getElementById("expense").innerHTML = "₹0";
  document.getElementById("saving").innerHTML = "₹0";

  document.getElementById("rgbalance").value = 0;
  document.getElementById("rgexpense").value = 0;
  document.getElementById("rgsaving").value = 0;
}

function updaterange() {

  const income = Number(localStorage.getItem("inamount")) || 0;
  const balance = Number(localStorage.getItem("totalbalance")) || 0;
  const expense = Number(localStorage.getItem("examount")) || 0;
  const saving = Number(localStorage.getItem("saveamount")) || 0;

  if (income <= 0) {
    document.getElementById("rgbalance").value = 0;
    document.getElementById("rgexpense").value = 0;
    document.getElementById("rgsaving").value = 0;
    return;
  }

  const perbalance = (balance / income) * 100;
  const perexpense = (expense / income) * 100;
  const persaving = (saving / income) * 100;

  document.getElementById("rgbalance").value = perbalance;
  document.getElementById("rgexpense").value = perexpense;
  document.getElementById("rgsaving").value = persaving;


  document.getElementById("balper").innerHTML =
    perbalance.toFixed(1) + "%";

  document.getElementById("expper").innerHTML =
    perexpense.toFixed(1) + "%";

  document.getElementById("savper").innerHTML =
    persaving.toFixed(1) + "%";
}