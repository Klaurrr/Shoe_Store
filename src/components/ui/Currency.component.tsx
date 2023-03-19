import React, { useCallback, useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentCurrency } from "@/store/slices/currencySlice";

import generateKey from "@/components/shared/GenerateKey";

import data from "db.json";

import icons from "@/assets/Header/icons";

import styles from "@/styles/components/ui/Currency.module.scss";
import UseOutsideClick from "@/hooks/UseOutsideClick";

const Currency = () => {
    const currentCurrency = useSelector(
        (state: { currency: { currency: string } }) => state.currency.currency
    );

    const dispatch = useDispatch();

    const regionRef = useRef<HTMLDivElement | null>(null);
    const forexRef = useRef<HTMLDivElement | null>(null);

    const [currency, setCurrency] = useState({
        region: "RUS",
        forex: currentCurrency,
    });

    const [isOpen, setIsOpen] = useState({
        region: false,
        forex: false,
    });

    const { region, forex } = data;

    const handleClick = (variable: string, item: string) => {
        if (variable === "region") {
            setCurrency((prev) => ({
                ...prev,
                region: item,
            }));
            setIsOpen((prev) => ({
                ...prev,
                region: false,
            }));
        } else {
            setCurrency((prev) => ({
                ...prev,
                forex: item,
            }));
            setIsOpen((prev) => ({
                ...prev,
                forex: false,
            }));
            dispatch(setCurrentCurrency(item));
        }
    };

    UseOutsideClick([regionRef, forexRef], isOpen, setIsOpen);

    return (
        <div className={styles.container}>
            <div className={styles.currency}>
                <div
                    onClick={() =>
                        setIsOpen((prev) => ({ ...prev, region: !prev.region }))
                    }
                >
                    <p>{currency.region}</p>
                    <img src={icons.arrow.src} alt="arrow-img" />
                </div>
                <div
                    onClick={() =>
                        setIsOpen((prev) => ({ ...prev, forex: !prev.forex }))
                    }
                >
                    <p>{currency.forex}</p>
                    <img src={icons.arrow.src} alt="arrow-img" />
                </div>
            </div>
            <div
                ref={regionRef}
                className={styles.drop_down}
                style={{
                    left: "0px",
                    opacity: isOpen.region ? "1" : "0",
                    visibility: isOpen.region ? "visible" : "hidden",
                }}
            >
                {region?.map((item) => (
                    <p
                        key={generateKey(item)}
                        onClick={() => handleClick("region", item)}
                    >
                        {item}
                    </p>
                ))}
            </div>
            <div
                ref={forexRef}
                className={styles.drop_down}
                style={{
                    right: "0px",
                    opacity: isOpen.forex ? "1" : "0",
                    visibility: isOpen.forex ? "visible" : "hidden",
                }}
            >
                {forex?.map((item) => (
                    <p
                        key={generateKey(item)}
                        onClick={() => handleClick("forex", item)}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Currency;
