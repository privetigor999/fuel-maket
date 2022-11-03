import React from "react";
import styles from "./styles.module.scss";
import armorSvg from "./../../images/advantage/armor.svg";
import coinSvg from "./../../images/advantage/coin.svg";
import pathSvg from "./../../images/advantage/path.svg";
import pointSvg from "./../../images/advantage/point.svg";
import titulSvg from "./../../images/advantage/titul.svg";
import timeSvg from "./../../images/advantage/time.svg";

const Advantage = () => {
  const items = [
    {
      id: 1,
      title: "Качество топлива",
      img: titulSvg,
    },
    {
      id: 2,
      title: "Бережем ваше время и нервы",
      img: timeSvg,
    },
    {
      id: 3,
      title: "Цена",
      img: coinSvg,
    },
    {
      id: 4,
      title: "Ваш комфорт—наша забота",
      img: pointSvg,
    },
    {
      id: 5,
      title: "Безопасность процесса",
      img: armorSvg,
    },
    {
      id: 6,
      title: "Несколько ТС в одном месте?",
      img: pathSvg,
    },
  ];
  return (
    <div className={styles.container}>
      <h2>Преимущества сервиса</h2>
      <div className={styles.mainBlock}>
        {items.map((item) => (
          <div className={styles.itemBlock} key={item.id}>
            <img className={styles.img} src={item.img} alt="logo" />
            <div className={styles.infoBlock}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.descr}>
                Aliquam rhoncus et massa adipiscing risus leo nec lacus,
                sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantage;
