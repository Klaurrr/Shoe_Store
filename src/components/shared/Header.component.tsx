import { FC, useEffect, useState } from "react";

import BaseForButton from "../ui/BaseForButton.component";

import icons from "@/assets/Header/icons";

import styles from "@/styles/components/shared/Header.module.scss";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { Redirect } from "next";
import Link from "next/link";
import { Sneakers } from "@/types/sneakers";

const Header: FC = () => {
  const [currency, setCurrency] = useState({
    region: "ENG",
    forex: "USD",
  });

  const router = useRouter();

  const sneakers = useSelector(
    (state: { bookMarks: { bookmarks: Sneakers } }) => state.bookMarks.bookmarks
  );

  useEffect(() => {
    console.log(sneakers);
  }, [sneakers]);

  const [value, setValue] = useState("");

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
          <input
            placeholder="Search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.wrapper_2} onClick={() => router.push("/Home")}>
        <img src={icons.logo.src} alt="logo-img" />
        <p>Studio</p>
      </div>
      <div className={styles.wrapper_3}>
        <div className={styles.icons}>
          <img src={icons.user.src} alt="icon-img" />
          <img
            src={icons.heart.src}
            alt="icon-img"
            onClick={() => router.push("/Bookmarks")}
          />

          <img src={icons.cart.src} alt="icon-img" />
        </div>
        <div className={styles.currency}>
          <div>
            <p>{currency.region}</p>
            <img src={icons.arrow.src} alt="arrow-img" />
          </div>
          <div>
            <p>{currency.forex}</p>
            <img src={icons.arrow.src} alt="arrow-img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
