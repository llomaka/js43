const transactionType = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const formRef = document.querySelector('.form');
const listRef = document.querySelector('.list');
const totalAmountRef = document.querySelector('.total-amount');

const account = {
    // Текущий баланс счета
  balance: 0,

   // История транзакций
  transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
  createTransaction(amount, type) {
    let generateId = this.transactions.length;
    const newTransaction = { id: generateId, type, amount };
    this.transactions.push(newTransaction);
    if (type == transactionType.DEPOSIT) { this.balance += amount; }
    else { this.balance -= amount; }
  },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму транзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
  deposit(amount) {
    this.createTransaction(amount, transactionType.DEPOSIT);
  },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму транзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
  withdraw(amount) {
    if (amount > this.balance) { alert(`Снятие ${amount} невозможно. Не достаточно средств.`); return;}
    this.createTransaction(amount, transactionType.WITHDRAW);
  },

    /*
     * Метод возвращает текущий баланс
     */
  getBalance() {
    return this.balance;
  },

    /*
     * Метод ищет и возвращает объект транзакции по id
     */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
        if (item.id === id) { console.table(item); return item; }
    }
    console.log(`Транзакция с идентификатором ${id} не найдена.`)
  },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
  getTransactionTotal(type) {
    let total = 0;
    for (const item of this.transactions) {
        if (item.type === type) { total += item.amount;}
    }
    return total;
  },
};

formRef.addEventListener('submit', event => {
    event.preventDefault();
    const userInput = event.currentTarget.elements.amount.value;
    if (!userInput) return;
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = userInput;
    listRef.append(itemEl);
    if (Number(userInput) < 0) {
        account.withdraw(Math.abs(Number(userInput)));
    }
    else {
        account.deposit(Number(userInput));
    }
    totalAmountRef.textContent = account.getBalance();
    formRef.reset();
});

// account.deposit(80);
// account.deposit(300);
// account.withdraw(200);
// account.deposit(2000);
// console.log(account.getBalance());
// account.withdraw(120);
// account.deposit(20);
// console.log(account.getBalance());
// console.log(account.getTransactionTotal('withdraw'));
// account.getTransactionDetails(5);