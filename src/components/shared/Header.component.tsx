import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";

import BaseForButton from "../ui/BaseForButton.component";
import Currency from "../ui/Currency.component";
import Input from "../ui/Input.component";

import icons from "@/assets/Header/icons";

import { Sneakers } from "@/types/sneakers";

import styles from "@/styles/components/shared/Header.module.scss";

const Header: FC = () => {
    const router = useRouter();

    const sneakers = useSelector(
        (state: { bookMarks: { bookmarks: Sneakers[] } }) =>
            state.bookMarks.bookmarks
    );
    useEffect(() => {
        console.log("Rerender");
    }, []);

    return (
        <header className={styles.container}>
            <div className={styles.wrapper_1}>
                <BaseForButton
                    width={"114px"}
                    height={"56px"}
                    text={"Menu"}
                    image={icons.sidelist}
                />
                <div className={styles.input}>
                    <img src={icons.searchIcon.src} alt="searchIcon-img" />
                    <Input />
                </div>
            </div>
            <div
                className={styles.wrapper_2}
                onClick={() => router.push("/Home")}
            >
                <img src={icons.logo.src} alt="logo-img" />
                <p>Store</p>
            </div>
            <div className={styles.wrapper_3}>
                <div className={styles.icons}>
                    <img src={icons.user.src} alt="icon-img" />
                    <img src={icons.heart.src} alt="icon-img" />
                    <img
                        src={icons.cart.src}
                        alt="icon-img"
                        onClick={() => router.push("/Cart")}
                    />
                    {sneakers?.length > 0 && (
                        <div className={styles.counter}>{sneakers.length}</div>
                    )}
                </div>
                <Currency />
            </div>
        </header>
    );
};

export default Header;
