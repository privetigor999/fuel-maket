import React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as Logo } from "./../../images/headerLogo.svg";
import { ReactComponent as User } from "./../../images/user.svg";
import { ReactComponent as Phone } from "./../../images/phone.svg";
const HeaderInfo = () => {
  return (
    <div className={styles.headerInfoContainer}>
      <Logo />
      <div className={styles.rightBlock}>
        <div className={styles.phoneBlock}>
          <Phone className={styles.phoneSvg} />
          <p>8 (495) 127-82-80</p>
        </div>

        <button className={styles.button}>Напишите нам</button>
        <button className={styles.button}>
          <User className={styles.userLogo} />
          Личный кабинет
        </button>
      </div>
    </div>
  );
};

export default HeaderInfo;
