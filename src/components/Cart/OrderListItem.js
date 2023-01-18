import { useContext } from "react";
import { CartContext } from "../../store/CartStore";
import styles from "./OrderListItem.module.css";

function OrderListItem(props) {
  const ctx = useContext(CartContext);

  const clickHandler = (operation) => {
    if (operation === "-") {
      if (props.item.quantity === 1) return props.onRemove(props.item.id);
      ctx.update(props.item.id, props.item.quantity - 1);
    } else {
      ctx.update(props.item.id, props.item.quantity + 1);
    }
  };

  return (
    <li
      className={`${styles["order-item"]} ${styles["order-item"]}`}
      key={props.item.id}
    >
      <div className={styles["order-item__info"]}>
        <p className={styles["order-item__name"]}>{props.item.name}</p>
        <div className={styles["order-item__metrics"]}>
          <p className={styles["order-item__price"]}>
            ${props.item.price.toFixed(2)}
          </p>
          <p className={styles["order-item__quantity"]}>
            X {props.item.quantity}
          </p>
        </div>
      </div>
      <div>
        <button className={styles["btn"]} onClick={() => clickHandler("-")}>
          -
        </button>
        <button className={styles["btn"]} onClick={() => clickHandler("+")}>
          +
        </button>
      </div>
    </li>
  );
}

export default OrderListItem;
