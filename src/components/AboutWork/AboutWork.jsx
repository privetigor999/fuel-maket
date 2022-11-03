import React from "react";
import styles from "./styles.module.scss";
import mouse from "./../../images/mouse-arrow.svg";
import call from "./../../images/call.svg";
import oil from "./../../images/oil.svg";

const AboutWork = () => {
  const items = [
    {
      id: 1,
      img: mouse,
      time: "1-3 мин.",
      haveArrow: true,
      title: "Оформление заявки",
      mainDescr:
        "Заполните заявку на сайте, укажите удобное для вас место приезда заправщика, сорт и количество топлива, которое хотите купить",
      descr: false,
    },
    {
      id: 2,
      img: call,
      time: "1-3 мин.",
      haveArrow: true,
      title: "Подтверждение заявки менеджером",
      mainDescr:
        "Дождитесь звонка нашего менеджера для уточнения условий заказа",
      descr: false,
    },
    {
      id: 3,
      img: oil,
      time: "30-90 мин.",
      haveArrow: false,
      title: "Заправка вашего автомобиля",
      mainDescr:
        "В назначенное время приедет заправщик и заправит автомобиль топливом. ",
      descr:
        "Если у заказчика есть действующий договор на топливные карты, то при оплате можно провести транзакцию через терминал. Переносное устройство есть у каждого заправщика",
    },
  ];
  return (
    <div className={styles.container}>
      <h2>Как мы работаем</h2>
      <div className={styles.mainBlocks}>
        {items.map((item) => (
          <div className={styles.blockItem} key={item.id}>
            <div className={styles.headerInfo}>
              <img
                src={item.img}
                alt="logo"
                className={styles.img}
                fill="current"
              />
              <div className={styles.rightBlock}>
                <p className={styles.item}>{item.time}</p>
                {item.haveArrow && <span>→</span>}
              </div>
            </div>
            <p className={styles.title}>{item.title}</p>
            <p>{item.mainDescr}</p>
            {item.descr && <p className={styles.descr}>{item.descr}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutWork;
