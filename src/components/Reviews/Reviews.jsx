import React from "react";
import styles from "./styles.module.scss";
import arrow from "./../../images/arrow.svg";

const Reviews = () => {
  const users = [
    {
      id: 1,
      name: "Гусев Вячеслав",
      employee: "Индивидуальный предприниматель",
      rev: "Velit, lectus sit urna tincidunt augue. Cursus vulputate pellentesque faucibus euismod. Diam pharetra, non, ut integer dui feugiat porttitor at. Non, dignissim enim viverra fringilla sit. Etiam justo a dignissim sociis vitae, nisi, justo, feugiat.",
    },
    {
      id: 2,
      name: "Зеленов Евгений",
      employee: "Гененеральный директор трансопртной компании",
      rev: "Mi auctor sit habitasse sed mi cras ullamcorper massa sed. In augue fames sodales pretium, at scelerisque. Pulvinar a mattis pharetra mi, aliquet sem tristique lorem eleifend. Nisl, scelerisque ut libero, pellentesque. Tincidunt vestibulum volutpat lacus imperdiet morbi vulputate tristique facilisi.",
    },
  ];
  return (
    <div className={styles.container}>
      <h2>Отзывы</h2>
      <div className={styles.reviews}>
        {users.map((user) => (
          <div className={styles.review} key={user.id}>
            <div className={styles.aboutUser}>
              <b>{user.name}</b>
              <p className={styles.employee}>{user.employee}</p>
            </div>

            <p className={styles.rev}>{user.rev}</p>
            <p className={styles.info}>Подробнее...</p>
          </div>
        ))}
      </div>
      <button>Читать все отзывы</button>
    </div>
  );
};

export default Reviews;
