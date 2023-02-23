import React, { FC } from "react";

import ArrowSvg from "./ArrowSvg.component";
import sneakerPanel from "@/assets/SneakerPanel/sneakerPanel";

import styles from "@/styles/components/ui/SneakerPanel.module.scss";

type Props = {
  background: string;
};

const SneakerPanel: FC<Props> = ({ background }) => {
  //TODO: Сделать такой текст, который будет меняться под цвет фона.
  return (
    <div className={styles.container} style={{ background }}>
      <div className={styles.wrapper_1}>
        <h1 className={styles.title}>
          Are you ready to <span>lead the way</span>
        </h1>
        <p className={styles.subtitle}>Luxury meets ultimate sitting comfort</p>
        <button className={styles.button} style={{ color: background }}>
          Discover
          <ArrowSvg fill={background} />
        </button>
      </div>
      <div className={styles.wrapper_2}>
        <p>Hot</p>
        <img src={sneakerPanel.legs.src} alt="legs-img" />
      </div>
    </div>
  );
};

export default SneakerPanel;
