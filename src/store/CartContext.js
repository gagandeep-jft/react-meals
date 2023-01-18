import { createContext } from "react";

const CartContext = createContext({
  cart: [],
  total: 0,
  // addToCart: (items) => {},
  // removeFromCart: (item) => {},
  // orderNow: () => {},
  // getTotal: () => {},
});

export default CartContext;