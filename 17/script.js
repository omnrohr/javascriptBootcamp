// import {
//   addToCart,
//   shoppingCartItems,
//   totalPrice,
//   totalQuantity,
// } from './shoppingCart.js';

import * as ShopCart from './shoppingCart.js';

import CloneDeep from './node_modules/lodash-es/cloneDeep.js';

console.log('importing module');
// console.log(shoppingCartItems); // this wil not work because the variables are scoped to the module

// console.log(shoppingCartValue); // because i export the variable I can access it here.

console.log(ShopCart.addToCart('item', 1));

console.log(
  'totalPrice',
  ShopCart.totalPrice,
  'totalQuantity',
  ShopCart.totalQuantity
);

import def from './shoppingCart.js';
def();

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
    console.log('this: ', this, 'cart', cart, 'this cart', this.cart);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2.cart);
console.log(ShoppingCart2.shippingCost);
