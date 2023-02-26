import React, { FC, useEffect, useState } from "react";

import ArrowSvg from "./ArrowSvg.component";
import sneakerPanel from "@/assets/SneakerPanel/sneakerPanel";

import styles from "@/styles/components/ui/SneakerPanel.module.scss";
import ProgressBar from "./ProgressBar.component";

import sneakers from "@/assets/Sneakers/sneakers";

type Props = {
  background: string;
};

const SneakerPanel: FC<Props> = ({ background }) => {

  const [cellNumber, setCellNumber] = useState(1);
  const [randomNum, setRandomNum] = useState(0)

  useEffect(() => {
    setRandomNum(Math.floor(Math.random() * 9))
  }, [])

  const colorArray = background
    .match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g)
    ?.map((item) => Number(item));

  const textColor = colorArray && [
    colorArray[0] - 4,
    colorArray[1] - 8,
    colorArray[2] - 13,
  ];

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
        <p
          style={{
            color:
              textColor &&
              `rgb(${textColor[0]}%, ${textColor[1]}%, ${textColor[2]}%)`,
          }}
        >
          Hot
        </p>
        <img src={sneakerPanel.legs.src} alt="legs-img" />
      </div>
      <div className={styles.wrapper_3}>
        <div className={styles.sneakers_wrapper}>
          {[1, 2, 3].map(cellNum => (
            <div
            key={cellNum}
            style={{
              background:
                cellNumber === cellNum && textColor
                  ? `rgb(${textColor[0]}%, ${textColor[1]}%, ${textColor[2]}%)`
                  : "",
            }}
            onClick={() => setCellNumber(cellNum)}
          >
            <img src={sneakers[Object.keys(sneakers)[cellNum + randomNum]]?.src} alt="sneaker-img" />
          </div>
          ))}
        </div>
        <div className={styles.progress_bar}>
          <ProgressBar/>
        </div>
      </div>
    </div>
  );
};

export default SneakerPanel;
