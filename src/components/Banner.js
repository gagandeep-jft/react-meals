import styles from "./Banner.module.css";
import Card from "./UI/Card";

export default function Banner() {
  return (
    <Card className={styles.banner}>
      <h1>Delicious Food, Delivered To You</h1>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at time
      </p>
      <p>
        All our meals are cooked with high-quality ingedients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
}
