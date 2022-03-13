'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2022-03-13T09:38:52.483Z',
    '2022-03-11T09:38:52.483Z',
    '2022-03-12T08:38:52.483Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatCur = function (value, local, currency) {
  return Intl.NumberFormat(local, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  };
  //get the user local format
  const local = navigator.languages;
  labelDate.innerHTML = Intl.DateTimeFormat(local, options).format(new Date());

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date"> ${getFormatedDate(
      acc.movementsDates[i],
      acc.local
    )} <b style="padding-left:10px"> ${getPassdTimeFormatedYYMMDD(
      acc.movementsDates[i],
      acc.local
    )}</b></div>
        <div class="movements__value">${
          /*mov.toFixed(2)*/ formatCur(mov, acc.local, acc.currency)
        }€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
  labelBalance.textContent = formatCur(acc.balance, acc.local, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const getPassdTimeInDays = function (time) {
  return Math.round(
    Math.abs(new Date(time) - new Date()) / (24 * 60 * 60 * 1000)
  );
};

const getPassdTimeFormatedYYMMDD = function (time, local) {
  let formatedTime = '';
  time = new Date(time);
  const todays = new Date();
  const pastInDays = Math.trunc((todays - time) / (1000 * 60 * 60 * 24));
  if (pastInDays < 8) {
    if (pastInDays == 0) formatedTime = 'Today';
    else if (pastInDays == 1) formatedTime = 'Yesterday';
    else formatedTime = `${pastInDays} days ago`;
  } else if (pastInDays >= 8) {
    const years = Math.trunc(pastInDays / 365);
    const months = Math.trunc((pastInDays % 365) / 30);
    const days = Math.trunc(pastInDays % (365 / 30));
    // console.log(
    //   'getPassdTimeFormatedYYMMDD',
    //   `${years} y, ${months} m, ${(days + '').padStart(2, 0)} d`
    // );

    formatedTime += `${years} Y, ${(months + '').padStart(2, 0)} m, ${(
      days + ''
    ).padStart(2, 0)} d ago`;

    //using javascript formatting
    // formatedTime = Intl.DateTimeFormat(local).format(time);
  }
  // console.log('past in days: ', pastInDays);

  return formatedTime;
};

// getPassdTimeFormatedYYMMDD(account1.movementsDates[0]);

const startLogoutTimer = function () {
  let time = 30;
  const tick = function () {
    const min = Math.trunc(time / 60);
    const sec = time % 60;
    labelTimer.textContent = `${(min + '').padStart(2, 0)}:${(
      sec + ''
    ).padStart(2, 0)}`;
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Login to get started';
      containerApp.style.opacity = 0;
    }
    time--;
  };
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

const updateUI = function (acc) {
  // Start logout Timer

  if (timer) clearInterval(timer);
  timer = startLogoutTimer();

  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);

  //Change movement bakground color
  changeBackground();
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement

    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

const getFormatedDate = function (dateStamp, local) {
  dateStamp = new Date(dateStamp);
  // return `${dateStamp.getFullYear()}/${(dateStamp.getMonth() + '').padStart(
  //   2,
  //   0
  // )}/${(dateStamp.getDate() + '').padStart(2, 0)}`;
  return Intl.DateTimeFormat(local).format(dateStamp);
};

// console.log(getFormatedDate(account1.movementsDates[0]));

// get movements form UI
document
  .querySelector('.balance__value')
  .addEventListener('click', function (e) {
    e.preventDefault();
    const allmovementsFromUI = [
      ...document.querySelectorAll('.movements__value'),
    ].map(el => el.textContent);
    // console.log('all movement form UI', allmovementsFromUI);
  });

//or
//#e9e7e7
document.querySelector('.logo').addEventListener('click', function (e) {
  e.preventDefault();
  const movemetFromUI = Array.from(
    document.querySelectorAll('.movements__value')
  );
  // console.log(
  //   'all movement from UI: ',
  //   movemetFromUI.map(row => +row.textContent.replace('€', ''))
  // );
});

const changeBackground = function () {
  document.querySelectorAll('.movements__row').forEach((r, i) => {
    if (i % 2 === 0) r.style.backgroundColor = '#e9e7e7';
  });
};

///fake log in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

const args = [' first param ', ' second param '];

const timer1 = setTimeout(
  (time1, time2) => console.log(`${time1}time out finished${time2}`),
  5000,
  ...args
);

//cnacel the timer

if (args.includes('first')) clearTimeout(timer1);

// time out for a cerine time
// setInterval(() => console.log(new Date()), 5000);
// setInterval(() => {
//   const nowTime = new Date();
//   console.log(
//     `${nowTime.getHours()}:H ${nowTime.getMinutes()}:M ${nowTime.getSeconds()}:S`
//   );
// }, 5000);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
first numbers in javascript ara binary represented so see these
results to understand what is that means"
*/
// console.log(0.1 + 0.2); //this returns 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); //this return false

/*
 second you can replace the Number conversen with +
java script will make the type conversion automaticaly for you
*/
// console.log(+'23', Number('23')); //both are 23 as a number

//parsing numbers, make sure to pass the radix base 10
// console.log(Number.parseInt('23 years old', 10));
// works only if it starts with number

// console.log((2.7).toFixed(3)); // return string 2.700

/*
///////////////////////////////////////
// Converting and Checking Numbers
console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

// console.log(parseFloat('  2.5rem  '));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));


///////////////////////////////////////
// Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));



const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));



///////////////////////////////////////
// Numeric Separators

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000'));
console.log(parseInt('230_000'));


///////////////////////////////////////
// Working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));

// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);


///////////////////////////////////////
// Creating Dates

// Create a date

const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));


// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);


///////////////////////////////////////
// Operations With Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
*/

const day1 = new Date(1980, 9, 17, 5);
// console.log('day1 in format: ', day1);
// console.log('day1 in number stamp: ', Number(day1));
const today = new Date(2020, 9, 17, 5);
// console.log('today in format: ', today);
// console.log('today in number: ', +today);

/// i added the trunc method to get all decimels out
/// then i added teh abs method to avoid negative values
const timePassedInDays = Math.trunc(
  Math.abs(day1 - today) / (24 * 60 * 60 * 1000)
);
// console.log('time passed in days: ', timePassedInDays);

// console.log(
//   'get passed time function: ',
//   getPassdTimeInDays(account1.movementsDates[0])
// );
