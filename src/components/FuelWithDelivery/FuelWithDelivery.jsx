import React from "react";
import styles from "./styles.module.scss";
const FuelWithDelivery = () => {
  const [litres, setLitres] = React.useState(1167);
  return (
    <div className={styles.container}>
      <h2>Топливо с доставкой</h2>
      <div className={styles.mainBlock}>
        <div className={styles.inputsBlock}>
          <label className={styles.label}>
            Вид топлива
            <select className={styles.select}>
              <option>ДТ</option>
              <option>АИ-95</option>
            </select>
          </label>

          <label className={styles.label}>
            Объём топлива
            <div className={styles.litresValue}>
              <p>Литров: {litres}</p>
            </div>
            <input
              type="range"
              className={styles.range}
              min="100"
              max="10000"
              step="1"
              value={litres}
              onChange={(e) => setLitres(e.target.value)}
            />
          </label>
          <label className={styles.label}>
            Место доставки
            <input
              type="text"
              className={styles.select}
              placeholder="Укажите место"
            />
          </label>
          <label className={styles.label}>
            Ваше имя
            <input type="text" className={styles.select} placeholder="Иван" />
          </label>
          <label className={styles.label}>
            Номер телефона
            <input
              type="number"
              className={styles.select}
              placeholder="+7 (___) ___-__-__"
            />
          </label>
        </div>
        <div className={styles.totalBlock}>
          <p className={styles.total}>Итого</p>
          <div className={styles.itemBlock}>
            <p className={styles.price}>Стоимость топлива</p>
            <p>77 350.00 ₽</p>
          </div>
          <div className={styles.itemBlock}>
            <div className={styles.leftBlock}>
              <p className={styles.price}>Цена за литр:</p>
              <p className={styles.descrBlock}>
                Цена и стоимость указаны ориентировочно. Точные цену и стоимость
                собщит наш менеджер при подтверждении заявки.
              </p>
            </div>
            <p>45.50 ₽</p>
          </div>
          <div className={styles.itemBlock}>
            <div className={styles.leftBlock}>
              <p className={styles.price}>Выгода:</p>
              <p className={styles.descrBlock}>
                При цене на АЗС 49.59 ₽ за литр, цены актуальны на 23.11.2020 г.
              </p>
            </div>
            <b>6 953.00 ₽</b>
          </div>
          <button className={styles.button}>Заказать топливо</button>
        </div>
      </div>
    </div>
  );
};

export default FuelWithDelivery;
