import { FC } from "react";

import Image from "next/image";

import styles from "@/styles/components/ui/BaseForButton.module.scss";

type BaseForButtonProps = {
  [key: string]: string;
};

const BaseForButton: FC<BaseForButtonProps> = ({
  width,
  height,
  image,
  text,
}) => {
  return (
    <div className={styles.background} style={{ width, height }}>
      <Image src={image} alt={"base-img"} />
      <p>{text}</p>
    </div>
  );
};

export default BaseForButton;
