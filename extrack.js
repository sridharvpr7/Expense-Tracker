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

  document.getElementById("intitle").value = "";
  document.getElementById("incategory").value = "";
  document.getElementById("indate").value = "";
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
  removeamount = Number(document.getElementById("examount").value);

  localexamount = Number(localStorage.getItem("examount")) || 0;
  localexamount += removeamount;

  let tb = Number(localStorage.getItem("totalbalance")) || 0;
  let redtotal = tb - removeamount;

  localStorage.setItem("examount", localexamount);
  localStorage.setItem("totalbalance", redtotal);

  document.getElementById("balance").innerHTML = "₹" + redtotal;
  document.getElementById("expense").innerHTML = "₹" + localexamount;

  document.getElementById("extitle").value = "";
  document.getElementById("excategory").value = "";
  document.getElementById("exdate").value = "";
  document.getElementById("examount").value = "";

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
  updateBudget();
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

  document.getElementById("transactions").innerHTML =
    localStorage.getItem("transactions") || "";

  document.getElementById("goalrange").innerHTML =
    localStorage.getItem("goalrange") || "";

  updaterange();
  updateBudget();
  updatebudgetrange();
  renderGoals();
}

function resetdata() {
  localStorage.removeItem("inamount");
  localStorage.removeItem("totalbalance");
  localStorage.removeItem("examount");
  localStorage.removeItem("saveamount");
  localStorage.removeItem("transactions");
  localStorage.removeItem("budget");
  localStorage.removeItem("goals");

  document.getElementById("balance").innerHTML = "₹0";
  document.getElementById("income").innerHTML = "₹0";
  document.getElementById("expense").innerHTML = "₹0";
  document.getElementById("saving").innerHTML = "₹0";

  document.getElementById("showbudget").innerHTML = "0";
  document.getElementById("remainbudget").innerHTML = "0";
  document.getElementById("budgetamount").value = "";

  document.getElementById("transactions").innerHTML = "";
  document.getElementById("goalrange").innerHTML = "";

  document.getElementById("rgbalance").value = 0;
  document.getElementById("rgexpense").value = 0;
  document.getElementById("rgsaving").value = 0;
  document.getElementById("budmeter").value = 0;

  document.getElementById("budper").value = 0;
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

function addincometotable() {
  let title = document.getElementById("intitle").value;
  let category = document.getElementById("incategory").value;
  let date = document.getElementById("indate").value;
  const amount = document.getElementById("incomeamount").value;

  let table = document.getElementById("transactions");
  let row = table.insertRow();

  row.innerHTML = `
<td data-type="income" style="border:green 2px solid;">${title}</td>
<td style="border:green 2px solid;">${category}</td>
<td style="border:green 2px solid;">${date}</td>
<td data-amount="${amount}" style="color:green;border:green 2px solid;">₹${amount}</td>
<td>
<button class="deletebtn" onclick="deletetransaction(this)">
Delete
</button>
</td>`;


  transsavelocalstorage()
}

function addexpensetotable() {
  let title = document.getElementById("extitle").value;
  let category = document.getElementById("excategory").value;
  let date = document.getElementById("exdate").value;
  const amount = document.getElementById("examount").value;

  let table = document.getElementById("transactions");
  let row = table.insertRow();

  row.innerHTML = `
<td data-type="expense" style="border:red 2px solid;">${title}</td>
<td style="border:red 2px solid;">${category}</td>
<td style="border:red 2px solid;">${date}</td>
<td data-amount="${amount}" style="color:red;border:red 2px solid;">-₹${amount}</td>
<td>
<button class="deletebtn" onclick="deletetransaction(this)">
Delete
</button>
</td>`;

  transsavelocalstorage()
}

function addsavetotable() {
  let title = document.getElementById("savetitle").value;
  let category = document.getElementById("savecategory").value;
  let date = document.getElementById("savedate").value;
  const amount = document.getElementById("saveamount").value;

  let table = document.getElementById("transactions");
  let row = table.insertRow();

  row.innerHTML = `
<td data-type="saving" style="border:blue 2px solid;">${title}</td>
<td style="border:blue 2px solid;">${category}</td>
<td style="border:blue 2px solid;">${date}</td>
<td data-amount="${amount}" style="color:blue;border:blue 2px solid;">₹${amount}</td>
<td>
<button class="deletebtn" onclick="deletetransaction(this)">
Delete
</button>
</td>`;

  transsavelocalstorage()
}

function transsavelocalstorage() {
  let table = document.getElementById("transactions");

  localStorage.setItem("transactions", table.innerHTML);
}

function deletetransaction(btn) {

  let row = btn.closest("tr");

  let type =
    row.cells[0].dataset.type;

  let amount =
    Number(row.cells[3].dataset.amount);

  let balance =
    Number(localStorage.getItem("totalbalance")) || 0;

  let income =
    Number(localStorage.getItem("inamount")) || 0;

  let expense =
    Number(localStorage.getItem("examount")) || 0;

  let saving =
    Number(localStorage.getItem("saveamount")) || 0;

  if (type === "income") {

    income -= amount;
    balance -= amount;

    localStorage.setItem("inamount", income);
  }

  else if (type === "expense") {

    expense -= amount;
    balance += amount;

    localStorage.setItem("examount", expense);
  }

  else if (type === "saving") {

    saving -= amount;
    balance += amount;

    localStorage.setItem("saveamount", saving);
  }

  localStorage.setItem(
    "totalbalance",
    balance
  );

  document.getElementById("income").innerHTML =
    "₹" + income;

  document.getElementById("expense").innerHTML =
    "₹" + expense;

  document.getElementById("saving").innerHTML =
    "₹" + saving;

  document.getElementById("balance").innerHTML =
    "₹" + balance;

  row.remove();

  localStorage.setItem(
    "transactions",
    document.getElementById("transactions").innerHTML
  );

  updaterange();
  updateBudget();
}

function savebudget() {
  let budget = Number(document.getElementById("budgetamount").value);

  localStorage.setItem("budget", budget);

  document.getElementById("showbudget").innerHTML = budget;

  document.getElementById("budgetamount").value = "";

  updateBudget();
}

function updateBudget() {

  let budget = Number(localStorage.getItem("budget")) || 0;
  let expense = Number(localStorage.getItem("examount")) || 0;
  let savings = Number(localStorage.getItem("saveamount")) || 0;

  if (budget <= 0) {
    document.getElementById("showbudget").innerHTML = "0";
    document.getElementById("remainbudget").innerHTML = "0";
    document.getElementById("budmeter").value = 0;
    document.getElementById("budper").innerHTML = "0%";
    return;
  }

  let used = expense + savings;
  let remaining = budget - used;

  document.getElementById("showbudget").innerHTML = budget;
  document.getElementById("remainbudget").innerHTML = remaining;

  let percentage = (used / budget) * 100;

  if (percentage > 100) {
    percentage = 100;
  }

  document.getElementById("budmeter").value = percentage;

  updatebudgetrange();
}

function budgetreset() {

  localStorage.removeItem("budget");

  document.getElementById("showbudget").innerHTML = "0";
  document.getElementById("remainbudget").innerHTML = "0";
  document.getElementById("budgetamount").value = "";

  document.getElementById("budmeter").value = 0;
  document.getElementById("budper").innerHTML = "0%";
}

function updatebudgetrange() {

  const budmeter = document.getElementById("budmeter");
  const budper = document.getElementById("budper");

  const budget = Number(document.getElementById("showbudget").innerText) || 0;
  const remaining = Number(document.getElementById("remainbudget").innerText) || 0;

  if (budget <= 0) {
    budmeter.value = 0;
    budper.innerHTML = "0%";
    return;
  }

  let used = budget - remaining;

  let result = (used / budget) * 100;

  if (result > 100) result = 100;
  if (result < 0) result = 0;

  budmeter.value = result;
  budper.innerHTML = result.toFixed(1) + "%";
}

function addgoal() {

  let goalName = prompt("Goal Name");
  if (!goalName) return;

  let goalAmount = Number(prompt("Goal Amount"));
  if (!goalAmount || goalAmount <= 0) return;

  let goals = JSON.parse(localStorage.getItem("goals")) || [];

  goals.push({
    id: Date.now(),
    name: goalName,
    target: goalAmount,
    received: 0
  });

  localStorage.setItem("goals", JSON.stringify(goals));

  renderGoals();
}

function renderGoals() {

  let goals =
    JSON.parse(localStorage.getItem("goals")) || [];

  let table =
    document.getElementById("goalrange");

  table.innerHTML = "";

  goals.forEach(goal => {

    let required =
      goal.target - goal.received;

    let percent =
      (goal.received / goal.target) * 100;

    if (percent > 100) percent = 100;

    let row = table.insertRow();

    row.innerHTML = `
    <td style="
      position:relative;
      border:black 2px solid;
      border-radius:8px;
      height:120px;
      background-color: rgb(243, 106, 255);
    ">

      <h2 style="position:absolute;top:10px;left:10px;">
        ${goal.name}
      </h2>

      <h3 style="
      position:absolute;
      top:10px;
      left:130px;">
      Received : ₹${goal.received}
      </h3>

      <h3 style="
      position:absolute;
      top:10px;
      left:300px;">
      Required : ₹${required}
      </h3>

      <h4 style="
      position:absolute;
      top:70px;
      left:10px;">
      Goal : ₹${goal.target}
      </h4>

      <input
      type="range"
      min="0"
      max="100"
      value="${percent}"
      style="
      width:300px;
      accent-color:yellow;
      pointer-events:none;
      margin-top:50px;
      ">

      <h3 style="
      position:absolute;
      top:50px;
      left:360px;">
      ${percent.toFixed(1)}%
      </h3>

      <button
      class="goaldeletebtn"
      onclick="deleteGoal(${goal.id})">
      Delete
      </button>

      <button
      class="goaladdbtn"
      onclick="depositGoal(${goal.id})">
      +
      </button>

    </td>`;
  });
}

function depositGoal(id) {

  let deposit =
    Number(prompt("Enter Deposit Amount"));

  if (!deposit) return;

  let balance =
    Number(localStorage.getItem("totalbalance")) || 0;

  if (deposit > balance) {
    alert("Insufficient Balance");
    return;
  }

  let goals =
    JSON.parse(localStorage.getItem("goals")) || [];

  goals.forEach(goal => {

    if (goal.id === id) {

      goal.received += deposit;

      balance -= deposit;

      localStorage.setItem(
        "totalbalance",
        balance
      );

      document.getElementById("balance")
        .innerHTML = "₹" + balance;
    }
  });

  localStorage.setItem(
    "goals",
    JSON.stringify(goals)
  );

  renderGoals();
}

function deleteGoal(id) {

  if (!confirm("Delete this goal and return saved money to balance?")) {
    return;
  }

  let goals =
    JSON.parse(localStorage.getItem("goals")) || [];

  let deletedGoal =
    goals.find(goal => goal.id === id);

  if (deletedGoal) {

    let balance =
      Number(localStorage.getItem("totalbalance")) || 0;

    balance += deletedGoal.received;

    localStorage.setItem(
      "totalbalance",
      balance
    );

    document.getElementById("balance").innerHTML =
      "₹" + balance;
  }

  goals = goals.filter(goal => goal.id !== id);

  localStorage.setItem(
    "goals",
    JSON.stringify(goals)
  );

  renderGoals();
}