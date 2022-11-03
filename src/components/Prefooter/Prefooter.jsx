import React from "react";
import styles from "./styles.module.scss";
const Prefooter = () => {
  return (
    <div className={styles.container}>
      <h2>Остались вопросы?</h2>
      <p>
        Готовы ответить на любой Ваш вопрос. Оставьте свой номер телефона и мы
        свяжемся с вами в ближайшее время
      </p>
      <div className={styles.contactBlock}>
        <input type="text" placeholder="Ваше имя" className={styles.input} />
        <input
          type="number"
          placeholder="Номер телефона"
          className={styles.input}
        />
        <button>Перезвоните мне</button>
      </div>
      <p className={styles.rules}>
        Нажимая на кнопку "Перезвоните мне" я соглашаюсь с{" "}
        <span>политикой конфиденциальности</span>
      </p>
    </div>
  );
};

export default Prefooter;
