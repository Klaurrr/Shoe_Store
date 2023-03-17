import React, { FC, useEffect, useState, useRef, useLayoutEffect } from "react";

import styles from "@/styles/components/ui/ProgressBar.module.scss";

type Props = {
    setCellNumber: (value: React.SetStateAction<number>) => void;
};

const ProgressBar: FC<Props> = ({ setCellNumber }) => {
    const [completed, setCompleted] = useState<number>(0);

    const firstBarRef = useRef<HTMLDivElement | null>(null);
    const secondBarRef = useRef<HTMLDivElement | null>(null);
    const thirdBarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCompleted((prevProgress) => {
                if (prevProgress === 300) {
                    if (
                        firstBarRef.current &&
                        secondBarRef.current &&
                        thirdBarRef.current
                    ) {
                        firstBarRef.current.style.width = "0%";
                        secondBarRef.current.style.width = "0%";
                        thirdBarRef.current.style.width = "0%";
                    }
                    return 0;
                } else {
                    return prevProgress + 1;
                }
            });
        }, 50);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (completed < 100) setCellNumber(1);
        if (completed > 100 && completed < 200) setCellNumber(2);
        if (completed > 200) setCellNumber(3);
    }, [completed]);

    useLayoutEffect(() => {
        if (
            firstBarRef.current &&
            secondBarRef.current &&
            thirdBarRef.current
        ) {
            switch (true) {
                case completed < 100:
                    firstBarRef.current.style.width = `${completed}%`;

                case completed > 100 && completed < 200:
                    secondBarRef.current.style.width = `${completed - 100}%`;

                case completed > 200:
                    thirdBarRef.current.style.width = `${completed - 200}%`;
            }
        }
    }, [completed]);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div ref={firstBarRef} className={styles.bar}></div>
            </div>
            <div className={styles.wrapper}>
                <div
                    className={styles.bar}
                    style={{ width: "0%" }}
                    ref={secondBarRef}
                ></div>
            </div>
            <div className={styles.wrapper}>
                <div
                    ref={thirdBarRef}
                    className={styles.bar}
                    style={{
                        width: "0%",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
