const transactionType = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const formRef = document.querySelector('.form');
const listRef = document.querySelector('.list');
const totalAmountRef = document.querySelector('.total-amount');
const totalWithdrawRef = document.querySelector('.total-withdraw');
const totalDepositRef = document.querySelector('.total-deposit');

const account = {

  balance: 0,

  transactions: [],

  createTransaction(amount, type, description) {
    let generateId = this.transactions.length;
    const newTransaction = { id: generateId, type, amount, description };
    this.transactions.push(newTransaction);
    if (type == transactionType.DEPOSIT) { this.balance += amount; }
    else { this.balance -= amount; }
  },

  deposit(amount, description) {
    this.createTransaction(amount, transactionType.DEPOSIT, description);
  },

  withdraw(amount, description) {
    if (amount > this.balance) { alert(`Снятие ${amount} невозможно. Не достаточно средств.`); return;}
    this.createTransaction(amount, transactionType.WITHDRAW, description);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const item of this.transactions) {
        if (item.id === id) { console.table(item); return item; }
    }
    console.log(`Транзакция с идентификатором ${id} не найдена.`)
  },

  getTransactionTotal(type) {
    return this.transactions.reduce((total, item) => {
      if (type === item.type) {
        total += item.amount;
      }
      return total;
    }, 0);
  },
};

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const userDesc = event.currentTarget.elements.description.value;
  const userInput = event.currentTarget.elements.amount.value;
  if (!userInput || !userDesc) return;
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = userInput;
  listRef.append(itemEl);
  if (Number(userInput) < 0) {
    account.withdraw(Math.abs(Number(userInput)), userDesc);      
  }
  else {
    account.deposit(Number(userInput), userDesc);
  }
  totalAmountRef.textContent = account.getBalance();
  totalDepositRef.textContent = account.getTransactionTotal('deposit');
  totalWithdrawRef.textContent = account.getTransactionTotal('withdraw');
  formRef.reset();
});
