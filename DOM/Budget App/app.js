const budgetInput = document.getElementById('budget-input');
const setBudgetButton = document.getElementById('set-budget');
const expenseTitleInput = document.getElementById('expense-title');
const expenseAmountInput = document.getElementById('expense-amount');
const addExpenseButton = document.getElementById('add-expense');
const totalBudgetDisplay = document.getElementById('total-budget');
const totalExpensesDisplay = document.getElementById('total-expenses');
const balanceDisplay = document.getElementById('balance');
const expenseList = document.getElementById('expense-list');
const budgetError = document.getElementById('budget-error');
const expenseError = document.getElementById('expense-error');

let totalBudget = 0;
let totalExpenses = 0;

setBudgetButton.addEventListener('click', () => {
    const budget = parseInt(budgetInput.value);
    if (isNaN(budget) || budget <= 0) {
        budgetError.classList.remove('hide');
    } else {
        totalBudget = budget;
        totalBudgetDisplay.textContent = totalBudget;
        balanceDisplay.textContent = totalBudget - totalExpenses;
        budgetError.classList.add('hide');
        budgetInput.value = '';
    }
});

addExpenseButton.addEventListener('click', () => {
    const expenseTitle = expenseTitleInput.value.trim();
    const expenseAmount = parseInt(expenseAmountInput.value);

    if (expenseTitle === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        expenseError.classList.remove('hide');
    } else {
        totalExpenses += expenseAmount;
        totalExpensesDisplay.textContent = totalExpenses;
        balanceDisplay.textContent = totalBudget - totalExpenses;

        const expenseItem = document.createElement('li');
        const expenseText = document.createElement('span');
        expenseText.textContent = `${expenseTitle}: $${expenseAmount}`;
        expenseItem.appendChild(expenseText);

        const actions = document.createElement('div');
        actions.classList.add('actions');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editExpense(expenseItem, expenseAmount));
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteExpense(expenseItem, expenseAmount));

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        expenseItem.appendChild(actions);

        expenseList.appendChild(expenseItem);

        expenseError.classList.add('hide');
        expenseTitleInput.value = '';
        expenseAmountInput.value = '';
    }
});

function editExpense(item, amount) {
    const expenseText = item.querySelector('span').textContent;
    const [title] = expenseText.split(`: $`);

    expenseTitleInput.value = title;
    expenseAmountInput.value = amount;

    deleteExpense(item, amount);
}

function deleteExpense(item, amount) {
    item.remove();
    totalExpenses -= amount;
    totalExpensesDisplay.textContent = totalExpenses;
    balanceDisplay.textContent = totalBudget - totalExpenses;
}
