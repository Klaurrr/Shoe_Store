import React from "react";

import { useSelector } from "react-redux";

import SneakerCard from "@/components/ui/SneakerCard.component";
import MainLayout from "@/layouts/MainLayout.component";

import { Sneakers } from "@/types/sneakers";

const Cart = () => {
  const sneakers = useSelector(
    (state: { bookMarks: { bookmarks: Sneakers } }) => state.bookMarks.bookmarks
  );

  return (
    <MainLayout>
      {sneakers?.length > 0 &&
        sneakers.map((item: Sneakers) => (
          <SneakerCard
            key={item.id}
            model={item.model}
            brend={item.brend}
            image={`${item.image}`}
            price={item.price}
            id={item.id}
          />
        ))}
    </MainLayout>
  );
};

export default Cart;
