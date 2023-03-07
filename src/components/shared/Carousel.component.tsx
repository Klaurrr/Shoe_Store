import { useEffect, useState, Children, cloneElement } from "react";

import ArrowSvg from "../ui/ArrowSvg.component";

import styles from "@/styles/components/shared/Carousel.module.scss";

type Props = {
  children: JSX.Element[];
};

const Carousel: React.FC<Props> = ({ children }) => {
  const [pages, setPages] = useState<any>([]);
  const [offset, setOffset] = useState(0);

  const page_width = 1038;

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${page_width}px`,
            maxWidth: `${page_width}px`,
          },
        });
      })
    );
  }, []);

  const handleClickLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + page_width;

      return Math.min(newOffset, 0);
    });
  };
  const handleClickRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - page_width;

      const maxOffset = -(pages.length - 1) * page_width;

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <div
          className={styles.pages_container}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
      </div>
      <div className={styles.arrows}>
        <div onClick={() => handleClickLeft()}>
          <ArrowSvg fill="#11293B" />
        </div>
        <div onClick={() => handleClickRight()}>
          <ArrowSvg fill="#11293B" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
