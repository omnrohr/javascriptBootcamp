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

///// the app code

const displayMovements = function (movements) {
  //clearing the index page data
  containerMovements.innerHTML = '';

  movements.forEach(function (movement, i) {
    //add the data in movements tabel
    const html = `<div class="movements__row"><div class="movements__type movements__type--${
      movement > 0 ? 'deposit' : 'withdrawal'
    }">${i} ${movement > 0 ? 'deposit' : 'withdrwal'}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${movement}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplaySummery = function (movements) {
  const totalDeposits = movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur);

  labelSumIn.textContent = totalDeposits + '€';

  labelSumOut.textContent = `${Math.abs(
    movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur)
  )}€`;

  labelSumInterest.textContent =
    (totalDeposits * currentUser.interestRate) / 100 + '€';
};

const createUserNameForArray = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

const calclulatDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

//calling the function to create usernames
createUserNameForArray(accounts);

// initialize user variable to use it outside the function
let currentUser;

const updateUI = function (curUser) {
  displayMovements(curUser.movements);
  calcDisplaySummery(curUser.movements);
  calclulatDisplayBalance(curUser);
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentUser = accounts.find(acc => acc.userName === inputLoginUsername.value);

  //updating the current user view

  //initialize movements to call back the function at the end of event
  let movements;

  const checkUser = function (user) {
    // "?"" ///// optinal chaining if user is undefined
    // it will not seek for pin property
    if (user?.pin === Number(inputLoginPin.value)) {
      labelWelcome.textContent = `Welcome back ${user.owner}`;

      movements = user?.movements;
      //remove the opacity to clear the window.
      containerApp.style.opacity = 100;
      //clear the username and password fields
      inputLoginUsername.value = inputLoginPin.value = '';
      //remove the foucs after successful login.
      inputLoginPin.blur();

      //calling functions.
      updateUI(user);
      // displayMovements(user.movements);
      // calcDisplaySummery(user.movements);
      // calclulatDisplayBalance(user);
    } else {
      //notify if the password is not correct and clear input.
      alert('please etnet a valid password!');
      inputLoginUsername.value = inputLoginPin.value = '';
    }
  };
  // to alert user if not user or undefined then clear inputs
  currentUser ||
    alert('Please enter a correct username!') ||
    (inputLoginUsername.value = inputLoginPin.value = '');

  //calling the main funtion if user is a user.
  if (currentUser !== undefined) checkUser(currentUser);
});

///transfer money feature

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  //get input data
  const [transferToObj, transferToAmount] = [
    accounts.find(acc => acc.userName === inputTransferTo.value),
    Number(inputTransferAmount.value),
  ];
  //if object and amount is valid
  if (
    transferToObj &&
    transferToObj !== currentUser &&
    transferToAmount > 0 &&
    currentUser.balance > transferToAmount
  ) {
    //clear input
    inputTransferTo.value = inputTransferAmount.value = '';
    //add new movement to transfer object movement
    transferToObj?.movements.push(transferToAmount);
    currentUser.movements.push(-transferToAmount);
    updateUI(currentUser);
  } else {
    //if any of values is not valid
    let message = '';
    //check if faild from user name.
    if (!transferToObj) message += 'faild, please check the username!' + '\n';
    //check if faild for amount
    if (transferToAmount < 0)
      message += 'faild, the ammount can not be less than or equal 0!' + '\n';
    if (transferToAmount > currentUser.balance)
      message +=
        'faild, the transfer ammount can not be greater than your balance!';
    alert(message);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  //get the ammount requested
  const loanAmount = Number(inputLoanAmount.value);
  //clear the amount in UI
  inputLoanAmount.value = '';
  if (loanAmount && currentUser.movements.some(mov => mov > loanAmount * 0.1)) {
    currentUser.movements.push(loanAmount);
    alert('your loan added successfully, Injoi!');
    updateUI(currentUser);
  } else {
    alert('requestd amount is higer than allowd');
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const [closeAccountObj, closeConfirmPIN] = [
    accounts.find(acc => acc.userName === inputCloseUsername.value),
    Number(inputClosePin.value),
  ];
  if (
    closeAccountObj &&
    closeAccountObj === currentUser &&
    closeConfirmPIN === currentUser.pin
  ) {
    accounts.splice(
      accounts.findIndex(acc => acc === closeAccountObj),
      1
    );
    inputClosePin.value = inputCloseUsername.value = '';
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }
});
