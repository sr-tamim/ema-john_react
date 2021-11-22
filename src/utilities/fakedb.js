import axios from "axios";

const addToDB = (product, cart, setCart) => {
  const newCart = [...cart, product]
  setCart(newCart);

  const productIDs = newCart.map(product => product._id);
  let DB = localStorage.getItem('shopping-cart') ? JSON.parse(localStorage.getItem('shopping-cart')) : {};

  productIDs.forEach(id => {
    DB[id] = productIDs.filter(i => i === id).length; // filter how many times one product has been added
  });

  localStorage.setItem('shopping-cart', (JSON.stringify(DB)));
}

const getFromDB = async () => {
  const dbJSON = localStorage.getItem('shopping-cart');
  if (!dbJSON) { return [] };
  const savedDB = JSON.parse(dbJSON);
  const productIDs = Object.keys(savedDB);
  const result = await axios.post('https://ema-john-srt.herokuapp.com/products/byID', productIDs);
  const { data } = result;
  // add products depending on the number of savedDB
  const cartItems = [];
  for (const product of data) {
    // if any product has been added to cart more than once then push that product into cartItems array more than once
    for (let i = 0; i < savedDB[product._id]; i++) {
      cartItems.push(product);
    }
  }
  return cartItems;
}

const emptyCart = setCart => {
  localStorage.removeItem('shopping-cart');
  setCart([]);
}

export { addToDB, getFromDB, emptyCart };