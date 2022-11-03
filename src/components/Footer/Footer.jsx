import React from "react";
import styles from "./styles.module.scss";
import logo from "./../../images/headerLogo.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBlock}>
        <img src={logo} alt="logo" />
        <p>© 2019 ООО"Процессинг 24"</p>
      </div>
      <div className={styles.navlist}>
        <div className={styles.leftNav}>
          <p>Карта АЗС</p>
          <p>АЗС по регионам</p>
          <p>АЗС по брендам</p>
          <p>Доставка топлива</p>
        </div>
        <div className={styles.rightNav}>
          <p>Контакты</p>
          <p>О компании</p>
          <p>Личный кабинет</p>
          <p></p>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <b>Отдел продаж</b>
        <p>8 (495) 127-81-70</p>
      </div>
    </div>
  );
};

export default Footer;
