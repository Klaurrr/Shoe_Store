import React, { FC } from "react";

import styles from "@/styles/components/ui/SneakerPanel.module.scss";
import icons from "@/assets/icons";

type Props = {
  background: string;
};

const SneakerPanel: FC<Props> = ({ background }) => {
  return (
    <div className={styles.container} style={{ background }}>
      <div className={styles.wrapper_1}>
        <h1 className={styles.title}>
          Are you ready to <span>lead the way</span>
        </h1>
        <p className={styles.subtitle}>Luxury meets ultimate sitting comfort</p>
        <button className={styles.button} style={{ color: background }}>
          Discover
          <img src={icons.buttonArrow.src} alt="buttonArrow-img" />
        </button>
      </div>
      <div className={styles.wrapper_2}></div>
    </div>
  );
};

export default SneakerPanel;
