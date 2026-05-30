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
  }
  else {
    formI.style.display = "block"
  }
}

function expensebtn() {
  const formE = document.getElementById("expenseform");
  const formI = document.getElementById("incomeform");
  const formS = document.getElementById("saveform");
  if (formE.style.display === "block" || formI.style.display === "block" || formS.style.display === "block") {
    formE.style.display = "none"
  }
  else {
    formE.style.display = "block"
  }
}

function savebtn() {
  const formS = document.getElementById("saveform");
  const formI = document.getElementById("incomeform");
  const formE = document.getElementById("expenseform");
  if (formI.style.display === "block" || formE.style.display === "block" || formS.style.display === "block") {
    formS.style.display = "none"
  }
  else {
    formS.style.display = "block"
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
  }
  else {
    formI.style.display = "block"
  }
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
  }
  else {
    formE.style.display = "block"
  }
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
  }
  else {
    formS.style.display = "block"
  }
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
}