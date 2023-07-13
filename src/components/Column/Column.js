import styles from "./Column.module.scss";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";

const Column = (props) => {
const addCard= (columnId, newCard)=>{
console.log("props.cards",props.cards)
  props.action(columnId, newCard)
}

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + " fa fa-" + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {props.cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={props.id} action={addCard}/>
    </article>
  );
};

export default Column;
