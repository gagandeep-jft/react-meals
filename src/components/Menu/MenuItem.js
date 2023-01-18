import { useContext, useState } from "react";
import styles from "./MenuItem.module.css";
import { CartContext } from "../../store/CartStore";

function MenuItem(props) {
  const [quantity, setQuantity] = useState(props.quantity);
  const ctx = useContext(CartContext);

  const quantityChangeHandler = (event) => {
    if (event.target.value === "0") setQuantity("1");
    else setQuantity(+event.target.value);
  };

  const submissionHandler = (e) => {
    e.preventDefault();
    ctx.addToCart({
      name: props.name,
      id: props.id,
      quantity: quantity,
      price: props.price,
    });
  };

  return (
    <li className={styles["menu-item"]}>
      <div className={styles["menu-item__details"]}>
        <div className={styles["menu-item__name"]}>{props.name}</div>
        <div className={styles["menu-item__description"]}>
          {props.description}
        </div>
        <div className={styles["menu-item__price"]}>
          ${props.price.toFixed(2)}
        </div>
      </div>
      <div className={styles["menu-item__order"]}>
        <div className={styles["menu-item__amount"]}>
          <div className={styles["menu-item__quantity"]}>Amount</div>
          <input
            type="number"
            name="quantity"
            className="menu-item__quantity_input"
            value={quantity}
            min="1"
            onChange={quantityChangeHandler}
          />
        </div>
        <form onSubmit={submissionHandler}>
          <button
            className={`card btn text-bold ${styles["menu-item__addbtn"]}`}
            type="submit"
          >
            + Add
          </button>
        </form>
      </div>
    </li>
  );
}

export default MenuItem;
