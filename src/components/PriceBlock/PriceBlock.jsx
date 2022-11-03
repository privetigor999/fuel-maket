import React from "react";
import styles from "./styles.module.scss";

const PriceBlock = () => {
  return (
    <div className={styles.priceBlockContainer}>
      <h2>Стоимость топлива</h2>
      <ul className={styles.typeFuels}>
        <li>Сорт топлива</li>
        <li>Экологический класс</li>
        <li>Производитель</li>
        <li>Наличный расчет</li>
        <li>Безналичный расчет</li>
      </ul>
      <div className={styles.typesTable}>
        <p className={styles.typeFuel}>ДТ</p>
        <div className={styles.classesTypes}>
          <div className={styles.euro5Block}>
            <p>ЕВРО-5</p>
            <div className={styles.companyFuelBlock}>
              <div className={styles.pricesFuelBlock}>
                <p>Газпромнефть</p>
                <p>45.43р.</p>
                <p>44.43р.</p>
              </div>
              <div className={styles.pricesFuelBlock}>
                <p>Лукойл</p>
                <p>45.16р.</p>
                <p>45.16р.</p>
              </div>
              <div className={styles.pricesFuelBlock}>
                <p>Роснефть</p>
                <p>42.34р.</p>
                <p>41.64р.</p>
              </div>
            </div>
          </div>
          <div className={styles.euro4Block}>
            <p>ЕВРО-4</p>
            <div className={styles.companyFuelBlock}>
              <div className={styles.pricesFuelBlock}>
                <p>Газпромнефть</p>
                <p>-</p>
                <p>-</p>
              </div>
              <div className={styles.pricesFuelBlock}>
                <p>Лукойл</p>
                <p>41.16р.</p>
                <p>40.67р.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.nextTable}>
        <p className={styles.typeFuel}>АИ-95</p>
        <div className={styles.classesTypes}>
          <div className={styles.euro5Block}>
            <p>ЕВРО-5</p>
            <div className={styles.companyFuelBlock}>
              <div className={styles.pricesFuelBlock}>
                <p>Газпромнефть</p>
                <p>45.43р.</p>
                <p>44.43р.</p>
              </div>
              <div className={styles.pricesFuelBlock}>
                <p>Лукойл</p>
                <p>45.16р.</p>
                <p>45.16р.</p>
              </div>
              <div className={styles.pricesFuelBlock}>
                <p>Роснефть</p>
                <p>42.34р.</p>
                <p>41.64р.</p>
              </div>
            </div>
          </div>
          <div className={styles.euro4Block}>
            <p>ЕВРО-4</p>
            <div className={styles.companyFuelBlock}>
              <div className={styles.pricesFuelBlock}>
                <p>Газпромнефть</p>
                <p>-</p>
                <p>-</p>
              </div>
              <div className={styles.pricesFuelBlock}>
                <p>Лукойл</p>
                <p>41.16р.</p>
                <p>40.67р.</p>
              </div>
            </div>
          </div>
          <div className={styles.euro5Block}>
            <p>ЕВРО-3</p>
            <div className={styles.companyFuelBlock}>
              <div className={styles.pricesFuelBlock}>
                <p>Газпромнефть</p>
                <p>-</p>
                <p>-</p>
              </div>
              <div className={styles.pricesFuelBlock}>
                <p>Лукойл</p>
                <p>41.16р.</p>
                <p>40.67р.</p>
              </div>
              <div className={styles.pricesFuelBlock}>
                <p>Роснефть</p>
                <p>41.16р.</p>
                <p>40.67р.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;
