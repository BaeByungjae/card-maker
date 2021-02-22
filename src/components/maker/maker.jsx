import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CardMakrer from "../cardMaker/cardMakrer";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput }) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "anna",
      company: "google",
      theme: "light",
      title: "software engineer",
      email: "qudwo09@naver.com",
      message: "go for it",
      fileName: null,
      fileURL: null,
    },
    2: {
      id: 2,
      name: "anna",
      company: "google",
      theme: "dark",
      title: "software engineer",
      email: "qudwo09@naver.com",
      message: "go for it",
      fileName: null,
      fileURL: null,
    },
    3: {
      id: 3,
      name: "anna",
      company: "google",
      theme: "colorful",
      title: "software engineer",
      email: "qudwo09@naver.com",
      message: "go for it",
      fileName: null,
      fileURL: null,
    },
  });
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  const createOrupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
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
