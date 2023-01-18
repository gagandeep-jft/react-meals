import { useReducer } from "react";
import CartContext from "./CartContext";

const computeTotal = (cart) => {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const defaultState = { cart: [], total: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      const cart = JSON.parse(JSON.stringify(state.cart));
      const isExist = cart.some((val) => val.id === action.payload.id);
      console.log(action.payload, "payload");
      if (!isExist) {
        cart.push(action.payload);
      } else {
        cart.forEach((val) => {
          if (val.id === action.payload.id) {
            val.quantity += action.payload.quantity;
          }
        });
      }
      return {
        cart: cart,
        total: computeTotal(cart),
      };
    case "remove":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { cart: updatedCart, total: computeTotal(updatedCart) };
    case "update":
      const itemToUpdate = state.cart.find((it) => {
        return it.id === action.payload.id;
      });
      itemToUpdate.quantity = action.payload.quantity;
      const newCart = state.cart.map((it) => {
        return it.id === action.payload.id ? itemToUpdate : it;
      });
      return { cart: newCart, total: computeTotal(newCart) };
    case "order":
      return { cart: [], total: 0 };
    default:
      throw new Error();
  }
};

const CartStore = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total: state.total,
        addToCart: (item) => {
          dispatch({ type: "add", payload: item });
        },
        removeFromCart: (id) => {
          dispatch({ type: "remove", payload: id });
          console.log(state.cart);
        },
        orderNow: () => {
          dispatch({ type: "order" });
          console.log("Ordering the following items...", state.cart);
          return true;
        },
        getTotal: () => {
          return state.total;
        },
        update: (id, quantity) => {
          console.log(quantity);
          dispatch({ type: "update", payload: { id, quantity } });
        },
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartStore, CartContext };
