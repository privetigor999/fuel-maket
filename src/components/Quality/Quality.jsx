import React from "react";
import styles from "./styles.module.scss";
import svg1 from "./../../images/degrees/1.svg";
import svg2 from "./../../images/degrees/2.svg";
import svg3 from "./../../images/degrees/3.svg";
import svg4 from "./../../images/degrees/4.svg";
import arrow from "./../../images/arrow.svg";
const Quality = () => {
  const degrees = [svg1, svg2, svg3, svg4];
  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        <h2>Сертификаты качества топлива</h2>
        <div className={styles.buttons}>
          <button>
            <img
              src={arrow}
              alt="arrow"
              style={{
                transform: "rotate(90deg)",
                width: "10px",
                height: "10px",
              }}
            />
          </button>
          <button>
            <img
              src={arrow}
              alt="arrow"
              style={{
                transform: "rotate(-90deg)",
                width: "10px",
                height: "10px",
              }}
            />
          </button>
        </div>
      </div>

      <div className={styles.blocks}>
        {degrees.map((degree) => (
          <div className={styles.block} key={Math.random()}>
            <img src={degree} alt="degree" className={styles.svg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quality;
