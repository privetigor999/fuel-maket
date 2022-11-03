import React from "react";
import styles from "./styles.module.scss";

const DeliveryBlock = () => {
  return (
    <div className={styles.deliveryBlock}>
      <h1>Доставка топлива</h1>
      <div className={styles.inputsBlock}>
        <h2>
          Быстрый <span>заказ топлива</span>
        </h2>
        <div className={styles.inputLabel}>
          <div>Ваше имя</div>
          <div>Номер телефона</div>
        </div>
        <div className={styles.inputsAndButton}>
          <input type="text" placeholder="Иван" />
          <input type="number" placeholder="+7 (___) ___-__-__" />
          <button className={styles.orderBtn}>Заказать топливо</button>
        </div>
        <div className={styles.checkboxBlock}>
          <input type="checkbox" />
          <p>Я согласен с условиями обработки данных</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBlock;
