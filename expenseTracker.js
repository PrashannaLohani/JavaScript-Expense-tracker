let amountValue = 0;
let incomeValue = 0;
let expenseValue = 0;

document.getElementById("income").innerHTML = `$ ${incomeValue}`;
document.getElementById("expense").innerHTML = `$ ${expenseValue}`;
document.getElementById("amount").innerHTML = `$ ${amountValue.toFixed(2)}`;
var form = document.getElementById("form");

let balance = incomeValue - expenseValue;
let data = [{ id: 1, desc: "", money: 0, balance: 0 }];

function addIncome(data) {
  let incomeId = document.getElementById("income");
  let tempIncome = data.map((ele) => ele.money);

  let totalIncome = tempIncome.reduce((acc, curr) => acc + curr);
  incomeId.innerHTML = `$${totalIncome}`;
}

function addExpense(data) {
  let expenseId = document.getElementById("expense");
  let tempExpense = data
    .filter((ele) => ele.money < 0)
    .map((ele) => Math.abs(ele.money))
    .reduce((acc, curr) => acc + curr, 0);

  expenseId.innerHTML = `$${tempExpense}`;
}

function dataMap(data) {
  if (desc.value && money.value) {
    let historyId = document.getElementById("history");
    let tempData = data
      .filter((ele) => ele.desc !== "" && ele.money !== 0)
      .map(
        (ele) =>
          `<li style="margin : 1rem auto" key="${ele.id}">
      <span>${ele.desc}</span>
     <span ${ele.money < 0 ? `style= "color:#f00"` : `style="color:#0f0" `}> ${
            ele.money
          } </span>
          <span>${ele.balance}</span>
    </li>`
      );
    historyId.innerHTML = tempData.join("");
  }
  document.getElementById("Balance").addEventListener("click", function () {
    dataMap(data);
  });
}

// Define the function outside the event listener
function addInputBalance() {
  var id = Math.ceil(Math.random() * 1000);
  var money = +document.getElementById("money").value;
  var desc = document.getElementById("desc").value;

  if (money < 0) {
    let val = Math.abs(money);
    if (val > amountValue) {
      alert("Insufficient Balance");
    } else {
      let tempObj = {
        id,
        money,
        desc,
        balance: amountValue + money,
      };
      data.push(tempObj);
      amountValue = amountValue + money;
      document.getElementById("amount").innerHTML = `$ ${amountValue.toFixed(
        2
      )}`;
      addExpense(data);
      dataMap(data);
    }
  } else {
    amountValue = amountValue + money;
    let tempObj = {
      id,
      money,
      desc,
      balance: amountValue,
    };
    data.push(tempObj);
    document.getElementById("amount").innerHTML = `$ ${amountValue.toFixed(2)}`;
    addIncome(data);
    dataMap(data);
  }
}
function incomeOnly(data) {
  let historyId = document.getElementById("history");
  let incomeData = data
    .filter((ele) => ele.money > 0)
    .map(
      (ele) =>
        `<li style ="margin : 1rem auto" key="${ele.id}">
          <span>${ele.desc}</span>
          <span style="color:#0f0">${ele.money}</span>
          <span>${ele.balance}</span>
        </li>`
    );
  historyId.innerHTML = incomeData.join("");
}
function expenseOnly(data) {
  let historyId = document.getElementById("history");

  let expenseData = data
    .filter((ele) => ele.money < 0)
    .map(
      (ele) =>
        `<li style ="margin : 1rem auto" key="${ele.id}">
          <span>${ele.desc}</span>
          <span style="color:#f00">${ele.money}</span>
          <span>${ele.balance}</span>
        </li>`
    );
  historyId.innerHTML = expenseData.join("");
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("desc").value = "";
    document.getElementById("money").value = "";
    return false;
  });
}
