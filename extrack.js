let addamount = 0;
let removeamount = 0;
let saveamount = 0;
let localaddamount = 0;
let localexamount = 0;
let localsaveamount = 0
let redtotal = 0;
let chart1;
let chart2;

function hideAllForms() {
  document.getElementById("incomeform").style.display = "none";
  document.getElementById("expenseform").style.display = "none";
  document.getElementById("saveform").style.display = "none";
}

function incomebtn() {
  hideAllForms();
  document.getElementById("incomeform").style.display = "block";
}

function expensebtn() {
  hideAllForms();
  document.getElementById("expenseform").style.display = "block";
}

function savebtn() {
  hideAllForms();
  document.getElementById("saveform").style.display = "block";
}

function closeForms() {
  hideAllForms();
}

function addincome() {
  addamount = Number(document.getElementById("incomeamount").value);

  if (addamount < 0 || addamount == "") {
    alert("Enter a valid amount🤬")
    return;
  }

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

  updaterange();
  loadChart1();
  loadChart2();
  loadChart3();
}

function addexpense() {
  removeamount = Number(document.getElementById("examount").value);

  if (removeamount < 0 || removeamount == "") {
    alert("Enter a valid amount🤬")
    return;
  }


  localexamount = Number(localStorage.getItem("examount")) || 0;
  localexamount += removeamount;

  let tb = Number(localStorage.getItem("totalbalance")) || 0;

  if (removeamount > tb) {
    alert("Insufficient Balance");
    return;
  }
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

  updaterange();
  updateBudget();
  updatebudgetrange();
  loadChart1();
  loadChart2();
  loadChart3();
}


function addsaving() {

  saveamount = Number(document.getElementById("saveamount").value);

  if (saveamount < 0 || saveamount == "") {
    alert("Enter a valid amount🤬")
    return;
  }


  let tb = Number(localStorage.getItem("totalbalance")) || 0;
  if (saveamount > tb) {
    alert("Insufficient Balance");
    return;
  }
  let redtotal = tb - saveamount;

  localsaveamount = Number(localStorage.getItem("saveamount")) || 0;
  localsaveamount += saveamount;

  let tbb = Number(localStorage.getItem("totalbalance")) || 0;
  if (saveamount > tb) {
    alert("Insufficient Balance");
    return;
  }

  localStorage.setItem("saveamount", localsaveamount);
  localStorage.setItem("totalbalance", redtotal);

  document.getElementById("saving").innerHTML = "₹" + localsaveamount;
  document.getElementById("balance").innerHTML = "₹" + redtotal;

  document.getElementById("savetitle").value = "";
  document.getElementById("savecategory").value = "";
  document.getElementById("savedate").value = "";
  document.getElementById("saveamount").value = "";

  const formS = document.getElementById("saveform");
  const formI = document.getElementById("incomeform");
  const formE = document.getElementById("expenseform");

  updaterange();
  updateBudget();
  updatebudgetrange();
  loadChart1();
  loadChart2();
  loadChart3();
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

  updaterange();
  updateBudget();
  updatebudgetrange();
  renderGoals();
  loadChart1();
  loadChart2();
  loadChart3();
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

  document.getElementById("savper").innerHTML = "0%";
  document.getElementById("expper").innerHTML = "0%";
  document.getElementById("balper").innerHTML = "0%";

  document.getElementById("budmeter").value = 0;

  document.getElementById("budper").innerHTML = "0%";

  document.getElementById("budgetstatus").innerHTML =
    "Safe ✅";


  renderGoals();
  updateBudget();
  loadChart1();
  loadChart2();
  loadChart3();
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

  if (amount < 0 || amount == "") {
    return;
  }

  let table = document.getElementById("transactions");
  let row = table.insertRow();

  row.innerHTML = `
<td data-type="income" style="border:green 2px solid;">${title}</td>
<td style="border:green 2px solid;">${"Income"}</td>
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

  let tb = Number(localStorage.getItem("totalbalance")) || 0;

  if (amount > tb) {
    return;
  }

  if (amount < 0 || amount == "") {
    return;
  }

  let table = document.getElementById("transactions");
  let row = table.insertRow();

  row.innerHTML = `
<td data-type="expense" style="border:red 2px solid;">${title}</td>
<td style="border:red 2px solid;">${"Expense"}</td>
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

  let tb = Number(localStorage.getItem("totalbalance")) || 0;

  if (amount > tb) {
    return;
  }

  if (amount < 0 || amount == "") {
    return;
  }

  let table = document.getElementById("transactions");
  let row = table.insertRow();

  row.innerHTML = `
<td data-type="saving" style="border:blue 2px solid;">${title}</td>
<td style="border:blue 2px solid;">${"Saving"}</td>
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
    Number(row.cells[4].dataset.amount);

  let balance =
    Number(localStorage.getItem("totalbalance")) || 0;

  let income =
    Number(localStorage.getItem("inamount")) || 0;

  let expense =
    Number(localStorage.getItem("examount")) || 0;

  let saving =
    Number(localStorage.getItem("saveamount")) || 0;

  if (type === "income") {

    if (balance < amount) {
      alert("Cannot delete. Balance is already used.");
      return;
    }

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

  else if (type === "goal") {

    balance += amount;

    let goals =
      JSON.parse(localStorage.getItem("goals")) || [];

    let goalName =
      row.cells[2].innerText;

    goals.forEach(goal => {

      if (goal.name === goalName) {

        goal.received -= amount;

        if (goal.received < 0) {
          goal.received = 0;
        }
      }
    });

    localStorage.setItem(
      "goals",
      JSON.stringify(goals)
    );

    renderGoals();
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
  loadChart1();
  loadChart2();
  loadChart3();
}

function savebudget() {
  let budget = Number(document.getElementById("budgetamount").value);

  localStorage.setItem("budget", budget);

  document.getElementById("showbudget").innerHTML = budget;

  document.getElementById("budgetamount").value = "";

  updateBudget();
  loadChart3();
}

function updateBudget() {

  const budget = Number(localStorage.getItem("budget")) || 0;
  const expense = Number(localStorage.getItem("examount")) || 0;
  const saving = Number(localStorage.getItem("saveamount")) || 0;

  const goals = JSON.parse(localStorage.getItem("goals")) || [];

  let goalAmount = 0;

  goals.forEach(goal => {
    goalAmount += Number(goal.received) || 0;
  });

  const used = expense + saving + goalAmount;

  let percentt = (used / budget) * 100;

  const remaining = Math.max(0, budget - used);

  if (percentt > budget) {

    let overspent = used - budget;

    document.getElementById("budgetstatus").innerHTML =
      `Over Budget ❌ ₹${overspent}`;

    document.getElementById("budgetstatus").style.color =
      "red";

  } else if (percentt >= 75) {
    document.getElementById("budgetstatus").innerHTML =
      `danger 💣`;

    document.getElementById("budgetstatus").style.color =
      "red";
  } else if (percentt >= 50) {
    document.getElementById("budgetstatus").innerHTML =
      `warning ⚠️`;

    document.getElementById("budgetstatus").style.color =
      "red";
  }
  else {

    document.getElementById("budgetstatus").innerHTML =
      `Safe ✅`;

    document.getElementById("budgetstatus").style.color =
      "green";
  }

  document.getElementById("showbudget").textContent = budget;
  document.getElementById("remainbudget").textContent = remaining;

  let percent = budget > 0 ? (used / budget) * 100 : 0;

  document.getElementById("budmeter").value =
    Math.min(percent, 100);

  document.getElementById("budper").innerHTML =
    percent.toFixed(1) + "%";
}

function getTotalGoalAmount() {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];

  let total = 0;

  goals.forEach(goal => {
    total += goal.received;
  });

  return total;
}

function budgetreset() {

  localStorage.removeItem("budget");

  document.getElementById("showbudget").innerHTML = "0";
  document.getElementById("remainbudget").innerHTML = "0";
  document.getElementById("budgetamount").value = "";

  document.getElementById("budmeter").value = 0;
  document.getElementById("budper").innerHTML = "0%";
  document.getElementById("budgetstatus").innerHTML =
    "Safe ✅";

  loadChart3();
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

    let required = Math.max(
      0,
      goal.target - goal.received
    );

    let percent =
      (goal.received / goal.target) * 100;

    if (percent > 100) percent = 100;

    let bgColor =
      percent >= 100
        ? "rgb(76, 175, 80)"
        : "rgb(243, 106, 255)";

    let row = table.insertRow();

    row.innerHTML = `
    <td style="
      position:relative;
      border:black 2px solid;
      border-radius:8px;
      height:120px;
      background-color:${bgColor};
    ">

      <h2 style="
      position:absolute;
      top:10px;
      left:10px;">
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

      ${percent >= 100
        ? `<h3 style="
            position:absolute;
            top:60px;
            left:180px;
            color:white;">
            ✅ Completed
           </h3>`
        : ""
      }

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

  let deposit = Number(prompt("Enter Deposit Amount"));

  if (!deposit || deposit <= 0) {
    alert("Enter valid amount");
    return;
  }

  let balance =
    Number(localStorage.getItem("totalbalance")) || 0;

  if (deposit > balance) {
    alert("Insufficient Balance");
    return;
  }

  let goals =
    JSON.parse(localStorage.getItem("goals")) || [];

  let goalName = "";

  goals.forEach(goal => {

    if (goal.id === id) {

      let remaining =
        goal.target - goal.received;

      if (remaining <= 0) {
        alert("Goal already completed 🎉");
        return;
      }

      if (deposit > remaining) {
        deposit = remaining;
      }

      goal.received += deposit;

      if (goal.received >= goal.target) {
        goal.received = goal.target;
        alert("🎉 Goal Completed!");
      }

      goalName = goal.name;

      balance -= deposit;

      localStorage.setItem(
        "totalbalance",
        balance
      );

      document.getElementById("balance").innerHTML =
        "₹" + balance;
    }
  });

  localStorage.setItem(
    "goals",
    JSON.stringify(goals)
  );




  // Add transaction row
  let table =
    document.getElementById("transactions");

  let row =
    table.insertRow();

  let today =
    new Date().toISOString().split("T")[0];

  row.innerHTML = `
    <td data-type="goal" style="border:orange 2px solid;">Goal Deposit</td>
    <td style="border:orange 2px solid;">${"Goal"}</td>
    <td style="border:orange 2px solid;">${goalName}</td>
    <td style="border:orange 2px solid;">${today}</td>
    <td data-amount="${deposit}"style="color:orange;border:orange 2px solid;">₹${deposit}</td>
    <td><button class="deletebtn"onclick="deletetransaction(this)">Delete</button></td>`;

  transsavelocalstorage();

  renderGoals();
  updateBudget();
  updaterange();
  loadChart1();
  loadChart2();
  loadChart3();
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
  updateBudget();
  updaterange();
  loadChart1();
  loadChart2();
  loadChart3();
}

function loadChart1() {

  let income = Number(localStorage.getItem("inamount")) || 0;
  let expense = Number(localStorage.getItem("examount")) || 0;
  let saving = Number(localStorage.getItem("saveamount")) || 0;

  if (chart1) {
    chart1.destroy();
  }

  chart1 = new Chart(document.getElementById("chart1"), {
    type: "pie",
    data: {
      labels: ["Income", "Expense", "Savings"],
      datasets: [{
        data: [income, expense, saving],
        backgroundColor: ['green', 'red', 'blue']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function loadChart2() {

  let income = Number(localStorage.getItem("inamount")) || 0;
  let expense = Number(localStorage.getItem("examount")) || 0;
  let saving = Number(localStorage.getItem("saveamount")) || 0;
  let balance = Number(localStorage.getItem("totalbalance")) || 0;

  if (chart2) {
    chart2.destroy();
  }

  chart2 = new Chart(document.getElementById("chart2"), {
    type: "bar",
    data: {
      labels: ["Income", "expense", "Saving", "balance"],
      datasets: [{
        label: 'Money flow (₹)',
        data: [income, expense, saving, balance],
        backgroundColor: ['green', 'red', 'blue', 'black'],
        color: ['yellow'],
        borderColor: "black",
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

let chart3;

function loadChart3() {

  let budget =
    Number(localStorage.getItem("budget")) || 0;

  let expense =
    Number(localStorage.getItem("examount")) || 0;

  let saving =
    Number(localStorage.getItem("saveamount")) || 0;

  let goals =
    JSON.parse(localStorage.getItem("goals")) || [];

  let goalAmount = 0;

  goals.forEach(goal => {
    goalAmount += Number(goal.received) || 0;
  });

  let used =
    expense + saving + goalAmount;

  let remaining =
    Math.max(0, budget - used);

  let percent =
    budget > 0
      ? ((used / budget) * 100).toFixed(1)
      : 0;

  if (chart3) {
    chart3.destroy();
  }

  chart3 = new Chart(
    document.getElementById("chart3"),
    {
      type: "doughnut",

      data: {
        labels: [
          "Used Budget",
          "Remaining Budget"
        ],

        datasets: [{
          data: [
            used,
            remaining
          ],

          backgroundColor: [
            "red",
            "green"
          ]
        }]
      },

      options: {

        responsive: true,

        plugins: {

          title: {
            display: true,
            text: `Budget Used ${percent}%`
          },

          legend: {
            position: "bottom"
          }
        }
      }
    }
  );
}