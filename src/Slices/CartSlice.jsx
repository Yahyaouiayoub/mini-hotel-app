import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: [
    {
      id: 1,
      TotalPrice: 0,
      cartCount: 0,
      products: [],
    },
  ],
  loading: false,
  error: null,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity, price, title, image } = action.payload;
      const cart = state.carts.find((cart) => cart.id === 1);

      if (cart) {
        const existingProduct = cart.products.find((p) => p.id === id);
        if (existingProduct) {
          existingProduct.quantity += quantity;
          existingProduct.totalPrice += price * quantity;
        } else {
          cart.products.push({
            id,
            title,
            image,
            quantity,
            price,
            totalPrice: price * quantity,
          });
          cart.cartCount += 1;
        }
        cart.TotalPrice += price * quantity;
      }
    },

    increaseQuantity: (state, action) => {
      const cart = state.carts.find((cart) => cart.id === 1);
      const product = cart?.products.find((p) => p.id === action.payload);
      if (product) {
        product.quantity += 1;
        product.totalPrice = product.quantity * product.price;
        cart.TotalPrice += product.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const cart = state.carts.find((cart) => cart.id === 1);
      const product = cart?.products.find((p) => p.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.totalPrice = product.quantity * product.price;
        cart.TotalPrice -= product.price;
      }
    },
    deleteFromCart: (state, action) => {
      const cart = state.carts.find((cart) => cart.id === 1);
      if (cart) {
        const productIndex = cart.products.findIndex(p => p.id === action.payload);
        if (productIndex !== -1) {
          const removedProduct = cart.products[productIndex];
          cart.TotalPrice -= removedProduct.totalPrice;
          cart.products.splice(productIndex, 1);
          cart.cartCount -= 1;
        }
      }
    },
    validationCART: (state) => {
      const cart = state.carts.find((cart) => cart.id === 1);
      if (cart) {
        cart.products = [];
        cart.TotalPrice = 0;
        cart.cartCount = 0;
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity ,deleteFromCart ,validationCART} = CartSlice.actions;
export default CartSlice.reducer;
