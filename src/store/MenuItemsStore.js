import { createContext } from "react";

const MenuItemsStore = createContext({
  menuItems: [
    {
      name: "Sushi",
      description: "Finet fish and veggies",
      price: 22.99,
      quantity: 1,
      id: Math.random(),
    },
    {
      name: "Schnitzel",
      description: "A german speciality!",
      price: 16.54,
      quantity: 1,
      id: Math.random(),
    },
    {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.46,
      quantity: 1,
      id: Math.random(),
    },
    {
      name: "Green Bowl",
      description: "Healthy...green...",
      price: 18.58,
      quantity: 1,
      id: Math.random(),
    },
  ],
});

export default MenuItemsStore;
