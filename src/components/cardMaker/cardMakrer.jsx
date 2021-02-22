import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./cardMaker.module.css";

const CardMakrer = ({ FileInput, cards, addCard, updateCard, deleteCard }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          FileInput={FileInput}
          key={key}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm FileInput={FileInput} onAdd={addCard} />
    </div>
  );
};

export default CardMakrer;
