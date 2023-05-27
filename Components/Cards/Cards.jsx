import styles from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={styles.Card}>
      <img className={styles.image} src={props.src} alt="image" />
      <div className={styles.heading}>{props.heading}</div>
      <span className={styles.author}>{props.author}</span>|{props.date}
      <p className={styles.descreption}>{props.descreption}</p>
    </div>
  );
};
export default Cards;
