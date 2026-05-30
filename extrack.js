function incomebtn() {
  const formI = document.getElementById("incomeform");
  const formE = document.getElementById("expenseform");
  if (formI.style.display === "block" || formE.style.display === "block") {
    formI.style.display = "none"
  }
  else {
    formI.style.display = "block"
  }
}

function expensebtn() {
  const formE = document.getElementById("expenseform");
  const formI = document.getElementById("incomeform");
  if (formE.style.display === "block" || formI.style.display === "block") {
    formE.style.display = "none"
  }
  else {
    formE.style.display = "block"
  }
}

function addincome() {
  const addamount = Number(document.getElementById("incomeamount").value);
  let localamount = Number(localStorage.getItem("inamount")) || 0;
  localamount += addamount;
  localStorage.setItem("inamount", localamount);
  document.getElementById("income").innerHTML = "₹" + localamount;
  document.getElementById("incomeamount").value = "";

  const formI = document.getElementById("incomeform");
  const formE = document.getElementById("expenseform");
  if (formI.style.display === "block" || formE.style.display === "block") {
    formI.style.display = "none"
  }
  else {
    formI.style.display = "block"
  }
}

function addexpense() {

  const removeamount = Number(document.getElementById("expeseamount").value);
  let localamount = Number(localStorage.getItem("inamount")) || 0;
  localamount -= removeamount;
  document.getElementById("income").innerHTML = "₹" + localamount;
  document.getElementById("expeseamount").value = "";
  
  const formE = document.getElementById("expenseform");
  const formI = document.getElementById("incomeform");
  if (formE.style.display === "block" || formI.style.display === "block") {
    formE.style.display = "none"
  }
  else {
    formE.style.display = "block"
  }
}