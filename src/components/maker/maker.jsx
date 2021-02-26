import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CardMakrer from "../cardMaker/cardMakrer";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ cardRepo, authService, FileInput }) => {
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);
  const history = useHistory();
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepo.syncCard(userId, (card) => {
      setCards(card);
    });
    return () => stopSync();
  }, [userId]);
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      } else {
        setUserId(user.uid);
      }
    });
  });
  const createOrupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepo.saveCard(userId, card);
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepo.removeCard(userId, card);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <section className={styles.container}>
        <CardMakrer
          FileInput={FileInput}
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
