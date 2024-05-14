document.addEventListener("DOMContentLoaded", () => {
    let calendarInput = document.getElementById("calendar-input");
    let selectedDate = document.getElementById("selected-date");
    let expensesTable = document.getElementById("expenses-table");

    const expensesData = {
        "2024-02-01": [
            { category: "Gas", amount: 500 },
            { category: "Car", amount: 600 },
            { category: "Shopping", amount: 956.48 },
            { category: "Food", amount: 150 }
        ],
        // Add more date-specific data here
    };

    calendarInput.addEventListener("change", (event) => {
        let selectedDateValue = event.target.value;
        let date = new Date(selectedDateValue);
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        selectedDate.innerHTML = date.toLocaleDateString('en-US', options);

        let expenses = expensesData[selectedDateValue] || [];
        expensesTable.innerHTML = "";
        expenses.forEach(expense => {
            let row = `<tr><td>${expense.category}</td><td>${expense.amount}</td></tr>`;
            expensesTable.innerHTML += row;
        });
    });

    let addButton = document.getElementById("add1");
    let popup2 = document.getElementById("popup2");
    let close2 = document.getElementById("close2");
    let processe2 = document.getElementById("processe2");

    addButton.addEventListener("click", () => {
        popup2.style.display = "block";
    });

    close2.addEventListener("click", () => {
        popup2.style.display = "none";
    });

    processe2.addEventListener("click", () => {
        // Process the expense adding logic here
        popup2.style.display = "none";
    });

    document.getElementById("other").addEventListener("change", function() {
        if (this.checked) {
            document.getElementById("other-text").style.display = "block";
        } else {
            document.getElementById("other-text").style.display = "none";
        }
    });

    let editButtons = document.querySelectorAll(".edit");
    let editPopup = document.getElementById("editPopup");
    let editClose = document.getElementById("editClose");
    let saveEdit = document.getElementById("saveEdit");
    let editPrice = document.getElementById("editPrice");
    let currentCard = null;

    editButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            let card = event.target.closest(".card");
            let amountText = card.querySelector(".amount").innerText.split(' ')[0];
            editPrice.value = amountText;
            currentCard = card;
            editPopup.style.display = "block";
        });
    });

    editClose.addEventListener("click", () => {
        editPopup.style.display = "none";
    });

    saveEdit.addEventListener("click", () => {
        if (currentCard) {
            let newAmount = editPrice.value;
            currentCard.querySelector(".amount").innerText = `${newAmount} SAR`;
            editPopup.style.display = "none";
        }
    });

    // Edit summary section
    let editSummaryButton = document.getElementById("edit-summary");
    let balanceSpan = document.getElementById("balance");
    let incomeSpan = document.getElementById("income");
    let budgetSpan = document.getElementById("budget");
    let expensesSpan = document.getElementById("expenses");

    editSummaryButton.addEventListener("click", () => {
        let balanceInput = prompt("Edit Total Balance:", balanceSpan.innerText);
        let incomeInput = prompt("Edit Monthly Income:", incomeSpan.innerText);
        let budgetInput = prompt("Edit The Budget:", budgetSpan.innerText);
        let expensesInput = prompt("Edit Expenses:", expensesSpan.innerText);

        if (balanceInput !== null) balanceSpan.innerText = balanceInput;
        if (incomeInput !== null) incomeSpan.innerText = incomeInput;
        if (budgetInput !== null) budgetSpan.innerText = budgetInput;
        if (expensesInput !== null) expensesSpan.innerText = expensesInput;
    });
});
