// login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transectionArea = document.getElementById('transaction-area');
    transectionArea.style.display = "block";
})
// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositeNumber = getInputNumber("depositAmount")

    if (depositeNumber < 0) {
        alert("You cann't deposit negative amount.Please try again!");
    } else {
        updateSpanText("currentDeposite", depositeNumber);
        updateSpanText("currentBalance", depositeNumber);

        document.getElementById("depositAmount").value = "";
    }
})

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");

    if(withdrawNumber < 0){
        alert("Can't withdraw less the 0 taka. Try Again!")
    }else{
        updateSpanText("currentWithdraw", withdrawNumber);
        updateSpanText("currentBalance", -1 * withdrawNumber);

        document.getElementById("withdrawAmount").value = "";
    }
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = addedNumber + currentNumber;
    document.getElementById(id).innerText = total;
}
