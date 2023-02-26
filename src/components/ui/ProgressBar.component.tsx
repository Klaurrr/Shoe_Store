import React, { FC, useEffect, useState } from "react";

import styles from "@/styles/components/ui/ProgressBar.module.scss";

type Props = {};

const ProgressBar: FC<Props> = ({}) => {

  const [completed, setCompleted] = useState(0);


  const [numBar, setNumBar] = useState(1);



  useEffect(() => {
    setNumBar(completed < 100 ? 1 : completed < 200 ? 2 : 3);
  }, [completed]);

  useEffect(() => {
    console.log(numBar);
  }, [numBar]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.bar}
          style={{ width: `${numBar === 1 && completed}%` }}
        ></div>
      </div>
      <div className={styles.wrapper}>
        <div
          className={styles.bar}
          style={{
            width: `${numBar === 2 ? completed - 100 : numBar > 2 ? 100 : 0}%`,
          }}
        ></div>
      </div>
      <div className={styles.wrapper}>
        <div
          className={styles.bar}
          style={{
            width: `${numBar === 3 ? completed - 200 : 0}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
