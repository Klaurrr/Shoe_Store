import React from "react";

import { useSelector } from "react-redux";

import SneakerCard from "@/components/ui/SneakerCard.component";
import MainLayout from "@/layouts/MainLayout.component";

import { Sneakers } from "@/types/sneakers";

import styles from "@/styles/pages/Cart.module.scss";

const Cart = () => {
  const sneakers = useSelector(
    (state: { bookMarks: { bookmarks: Sneakers[] } }) =>
      state.bookMarks.bookmarks
  );

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Корзина</h1>
        {sneakers?.length > 0 ? (
          <div className={styles.wrapper}>
            {sneakers.map((item: Sneakers) => (
              <SneakerCard
                key={item.id}
                model={item.model}
                brend={item.brend}
                image={`${item.image}`}
                price={item.price}
                id={item.id}
                action={"Remove"}
              />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>Пусто...</div>
        )}
      </div>
    </MainLayout>
  );
};

export default Cart;
