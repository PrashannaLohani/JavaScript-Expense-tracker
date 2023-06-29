let amountValue = 0;
let incomeValue = 0;
let expenseValue = 0;
document.getElementById("income").innerHTML = `$ ${incomeValue}`;
document.getElementById("expense").innerHTML = `$ ${expenseValue}`;
document.getElementById("amount").innerHTML = `$ ${amountValue.toFixed(2)}`;
var form = document.getElementById("form");

let data = [{ id: 1, desc: "", money: 0 }];

function addIncome(data) {
  let incomeId = document.getElementById("income");
  let tempIncome = data.map((ele) => ele.money);

  let totalIncome = tempIncome.reduce((acc, curr) => acc + curr);
  incomeId.innerHTML = `$${totalIncome}`;
}
addIncome(data);
function addExpense(data) {
  let expenseId = document.getElementById("expense");
  let tempExpense = data
    .filter((ele) => ele.money < 0)
    .map((ele) => Math.abs(ele.money))
    .reduce((acc, curr) => acc + curr, 0);

  expenseId.innerHTML = `$${tempExpense}`;
}
addExpense(data);

function dataMap(data) {
  if (desc.value && money.value) {
    let historyId = document.getElementById("history");
    let tempData = data
      .filter((ele) => ele.desc !== "" && ele.money !== 0)
      .map(
        (ele) =>
          `<li key="${ele.id}">
      <span>${ele.desc}</span>
     <span ${ele.money < 0 ? `style= "color:#f00"` : `style="color:#0f0" `}> ${
            ele.money
          } </span>
    </li>`
      );
    historyId.innerHTML = tempData;
  }
}

dataMap(data);

// Define the function outside the event listener
function addInputBalance() {
  var id = Math.ceil(Math.random() * 1000);
  var money = +document.getElementById("money").value;
  var desc = document.getElementById("desc").value;
  let tempObj = {
    id,
    money,
    desc,
  };
  data.push(tempObj);

  amountValue = amountValue + money;
  if (amountValue < 0) {
    alert("Insufficient Balance");
    return;
  } else {
    document.getElementById("amount").innerHTML = `$ ${amountValue}`;

    dataMap(data);
    if (money > 0) {
      addIncome(data);
    } else if (money < 0) {
      addExpense(data);
    } else {
      return 0;
    }
  }
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("desc").value = "";
    document.getElementById("money").value = "";
    return false;
  });
}
