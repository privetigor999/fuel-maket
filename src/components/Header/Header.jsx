import React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as Arrow } from "../../images/arrow.svg";

const Header = () => {
  const navItems = [
    { id: 1, title: "Доставка топлива", haveArrow: false },
    { id: 2, title: "Топливные карты", haveArrow: true },
    { id: 3, title: "АЗС", haveArrow: true },
    { id: 4, title: "Цены на топливо", haveArrow: false },
    { id: 5, title: "О компании", haveArrow: true },
    { id: 6, title: "Контакты", haveArrow: false },
  ];
  return (
    <nav className={styles.headerContainer}>
      <ul className={styles.listNavItems}>
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            {navItem.title}{" "}
            {navItem.haveArrow && <Arrow className={styles.arrow} />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
