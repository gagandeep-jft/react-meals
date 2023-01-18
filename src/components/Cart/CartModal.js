import { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import Card from "../UI/Card";
import styles from "./CartModal.module.css";
import OrderList from "./OrderList";
import MenuItemStyles from "../Menu/MenuItem.module.css";

const BackgroundOverlay = (props) => {
  return <div className={styles["background-overlay"]}></div>;
};

function CartModal(props) {
  const [isOrdered, setIsOrdered] = useState(false);

  if (!props.isVisible) {
    if (isOrdered) {
      setIsOrdered(false);
    }
    return;
  }

  const onOrder = () => {
    if (props.numberOfItems === 0) {
      return;
    }
    setIsOrdered(true);
    props.onOrderNow();
  };

  let message = isOrdered ? "Order Placed Successfully!" : "Cart is Empty!";
  console.log(message);

  return (
    <Fragment>
      {createPortal(
        <BackgroundOverlay />,
        document.getElementById("background-overlay-root")
      )}
      <Card className={styles.modal}>
        {(props.cart.length === 0 || isOrdered) && (
          <Fragment>
            <p className={styles["cart-empty-message"]}>{message}</p>
            <div className={styles.btns}>
              <button onClick={props.onClose} className={`btn ${styles.btn}`}>
                Close
              </button>
            </div>
          </Fragment>
        )}
        {props.cart.length > 0 && !isOrdered && (
          <Fragment>
            <OrderList items={props.cart} onRemove={props.onRemove} />
            <div className={styles["total-amount"]}>
              <p>Total Amount</p>
              <span className={MenuItemStyles["menu-item__price"]}>
                ${props.total.toFixed(2)}
              </span>
            </div>
            <div className={styles.btns}>
              <button onClick={props.onClose} className={`btn ${styles.btn}`}>
                Close
              </button>
              <button
                onClick={() => {
                  onOrder();
                }}
                className={`btn ${
                  props.numberOfItems === 0 ? styles["btn-disabled"] : ""
                }`}
                disabled={props.numberOfItems === 0}
              >
                Order
              </button>
            </div>
          </Fragment>
        )}
      </Card>
    </Fragment>
  );
}

export default CartModal;
