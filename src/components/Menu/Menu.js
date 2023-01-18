import { useContext } from "react";
import Card from "../UI/Card";
import MenuItem from "./MenuItem";
import MenuItemsStore from "../../store/MenuItemsStore";
import styles from "./Menu.module.css";

function Menu() {
  const menuStore = useContext(MenuItemsStore);
  return (
    <Card>
      <ul className={styles.menu}>
        {menuStore.menuItems.map((menuItem) => {
          return (
            <MenuItem
              key={menuItem.id}
              id={menuItem.id}
              name={menuItem.name}
              description={menuItem.description}
              price={menuItem.price}
              quantity={menuItem.quantity}
            />
          );
        })}
      </ul>
    </Card>
  );
}

export default Menu;
