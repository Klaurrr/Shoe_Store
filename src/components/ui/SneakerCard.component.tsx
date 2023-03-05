import React, { FC, useEffect, useState } from "react";

import styles from "@/styles/components/ui/SneakerCard.module.scss";
import sneakers from "@/assets/Sneakers/sneakers";
import CartSvg from "./CartSvg.component";

type Props = {
  model: string;
  brend: string;
  image: string;
  price: number;
  id: number;
};

const SneakerCard: FC<Props> = ({ model, brend, image, price, id }) => {
  const [randomNum, setRandomNum] = useState(0);
  const [percent, setPercent] = useState(0);
  const [outlineColor, setOutlineColor] = useState("#000000");

  useEffect(() => {
    setRandomNum(Math.floor(Math.random() * 4));
    setPercent(Math.floor(Math.random() * (35 - 3) + 3));
  }, []);

  const oldPrice = (price * percent) / 100;

  const backgrounds = [
    "(100%, 89%, 71%)",
    "(47%, 89%, 59%)",
    "(96%, 90%, 100%)",
    "(41%, 92%, 92%)",
    "(247,194,155)",
  ];

  const generateKey = (pre: string): string => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <div className={styles.container} key={id}>
      <div
        className={styles.wrapper_1}
        style={{ background: `rgb${backgrounds[randomNum]}` }}
      >
        {percent > 23 && (
          <div
            className={styles.mark}
            style={{ color: percent >= 30 ? "#E61800" : "#FFFEC8" }}
          >
            -{percent}%
          </div>
        )}
        <img src={sneakers[image].src} alt="sneaker-img" />
      </div>
      <div className={styles.wrapper_2}>
        <p className={styles.title}>
          {brend} {model}
        </p>
        <p className={styles.price}>
          {price},00₽ <span>{price + oldPrice},00₽</span>
        </p>
        <div className={styles.colors_wrapper}>
          <div>colors</div>
          <div>
            {["#000000", "#E61800", "#E67100", "#E6C400", "#70B200"].map(
              (color) => (
                <div
                  key={generateKey(color)}
                  style={{
                    background: color,
                    outline: outlineColor === color ? "1px solid gray" : "none",
                  }}
                  onClick={() => setOutlineColor(color)}
                  className={styles.color_item}
                ></div>
              )
            )}
          </div>
        </div>
      </div>
      <button>
        <CartSvg fill={"#677585"} />
        Add to cart
      </button>
    </div>
  );
};

export default SneakerCard;
