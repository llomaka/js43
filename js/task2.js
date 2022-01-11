//todo Коллбек функции
/*
 * Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError), где первый параметр это сумма операции, а второй и третий - колбеки.

* Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае.

* Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае.
 */
const TRANSACTION_LIMIT = 1000;

const account = {
    balance: 0,

    deposit(amount, onSuccess, onError) {
        if (amount <= 0) { onError(`Сумма транзакции ${amount} меньше или равно 0.`); return; }
        if (amount > this.TRANSACTION_LIMIT) { onError(`Сумма транзакции ${amount} превышает установленный лимит ${TRANSACTION_LIMIT}`); return; }
        this.balance += amount;
        onSuccess(`Сумма транзакции ${amount} добавлена на счет. Баланс составляет ${this.balance}.`);
    },
     
    withdraw(amount, onSuccess, onError) {
        if (amount > this.balance) { onError(`Сумма транзакции ${amount} превышает баланс ${this.balance}`); return;}
         if (amount > this.TRANSACTION_LIMIT) { onError(`Сумма транзакции ${amount} превышает установленный лимит ${TRANSACTION_LIMIT}`); return; }
         this.balance -= amount;
         onSuccess(`Сумма транзакции ${amount} снята со счета. Баланс составляет ${this.balance}.`);
    },
     
     getBalance() {
        return this.balance;
    },
};

const handleSuccess = (message) => console.log(`✅ Success! ${message}`);

const handleError = (message) => console.log(`❌ Error! ${message}`);

account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
