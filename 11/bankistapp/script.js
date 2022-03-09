'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///// the app code

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (movement, i) {
    const html = `<div class="movements__row"><div class="movements__type movements__type--${
      movement > 0 ? 'deposit' : 'withdrawal'
    }">${i} ${movement > 0 ? 'deposit' : 'withdrwal'}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${movement}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUserNameForArray = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
    console.log(`user name for: ${acc.owner} is "${acc.userName}"`);
    // console.log('user name for: ', acc.owner, acc.userName);
  });
};

// const createUserName = function (username) {
//   return username
//     .toLowerCase()
//     .split(' ')
//     .map(word => word[0])
//     .join('');
// };

displayMovements(account1.movements);
// accounts.forEach(function (account) {
//   account.username = createUserName(account.owner);
//   console.log('user name for: ', account.owner, account.username);
// });

const calclulatDisplayBalance = function (mov) {
  const balance = mov.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`;
};
calclulatDisplayBalance(account1.movements);
createUserNameForArray(accounts);
console.log(accounts);

const withdrawals = movements.filter(mov => mov < 0);
const deposits = movements.filter(mov => mov > 0);
console.log(withdrawals, deposits);
const balance = movements.reduce((acc, cur) => acc + cur);
console.log(balance);
const totalWithdrawals = withdrawals.reduce(function (
  accumilator,
  currentItem
) {
  return accumilator + currentItem;
});
console.log(totalWithdrawals);

const totalDeposits = deposits.reduce(function (
  accumilator,
  currentValue,
  i,
  arr
) {
  console.log(
    `the iterator value for ${i} acc: ${accumilator} current value: ${currentValue}`
  );
  return accumilator + currentValue;
},
0); // 0 is for the first iteration value.
console.log(totalDeposits);
labelBalance.textContent = `${balance}€`;

const maxMovement = movements.reduce(
  (acc, cur) => (cur > acc ? cur : acc),
  movements[0]
);
console.log(maxMovement);
