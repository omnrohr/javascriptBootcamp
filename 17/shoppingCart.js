console.log('shopping cart module');

// tow types of exports
//1- is named export teh easiest add export infront of tht variable or function
export const shoppingCartValue = 10;
const shoppingCartItems = [];

export const addToCart = function (product, quantity) {
  shoppingCartItems.push({ product, quantity });
  console.log(
    'using find ',
    shoppingCartItems.find(pro => pro.product === product)
  );
  console.log(
    'using filter: ',
    shoppingCartItems.filter(pro => pro.product === product)
  );

  return [
    shoppingCartItems.find(val => Object.values(val)[0] === product),
    `${quantity} ${product} added to cart`,
  ];
};

// 2nd way of exporting variables

const totalPrice = 222;
const totalQuantity = 12;

export { totalPrice, totalQuantity, shoppingCartItems };

export default function () {
  console.log('default export');
}
