import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import styles from "./Navbar.module.css";
import { CartContext } from "../../store/CartStore";
import CartModal from "../Cart/CartModal";
import { Fragment, useContext, useState } from "react";
import { createPortal } from "react-dom";

export default function Navbar(props) {
  const ctx = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Fragment>
      <nav className={styles["navbar"]}>
        <Fragment>
          <div className={styles["navbar__brand"]}>ReactMeals</div>
          <Card
            className={styles["navbar__cart"]}
            onClick={() => {
              setIsVisible(true);
            }}
          >
            <div>
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div>Your Cart</div>
            <div>{ctx.cart.length}</div>
          </Card>
        </Fragment>
      </nav>
      {createPortal(
        <CartModal
          isVisible={isVisible}
          onClose={() => {
            setIsVisible(false);
          }}
          onOrderNow={ctx.orderNow}
          onRemove={ctx.removeFromCart}
          cart={ctx.cart}
          total={ctx.total}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}
