import OrderListItem from "./OrderListItem";
import styles from "./OrderList.module.css";

function OrderList(props) {
  return (
    <>
      {props.items.length > 0 && (
        <ul className={styles["order-list"]}>
          {props.items.map((item) => (
            <OrderListItem
              item={item}
              key={item.id}
              onRemove={props.onRemove}
              onUpdate={props.onUpdate}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default OrderList;
