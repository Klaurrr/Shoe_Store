import React, { FC, useEffect } from "react";

import MainLayout from "@/layouts/MainLayout.component";

import { Sneakers } from "@/types/sneakers";

import SneakerPanel from "@/components/ui/SneakerPanel.component";
import Carousel from "@/components/shared/Carousel.component";
import SneakerCard from "@/components/ui/SneakerCard.component";

import styles from "@/styles/pages/Home.module.scss";

const Home: FC<{ sneakers: Sneakers[] }> = ({ sneakers }) => {
  return (
    <MainLayout>
      <section>
        <Carousel>
          <SneakerPanel background={"rgb(100%, 89%, 71%)"} />
          <SneakerPanel background={"rgb(47%, 89%, 59%)"} />
          <SneakerPanel background={"rgb(96%, 90%, 100%)"} />
          <SneakerPanel background={"rgb(41%, 92%, 92%)"} />
        </Carousel>
      </section>
      <section></section>
      <section className={styles.container}>
        {sneakers ? (
          sneakers.map((sneaker: Sneakers) => (
            <SneakerCard
              key={sneaker.id}
              id={sneaker.id}
              model={sneaker.model}
              brend={sneaker.brend}
              image={`${sneaker.image}`}
              price={sneaker.price}
              action={"Add"}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch(
      "https://shoe-store-sigma.vercel.app/api/sneakers"
    );
    const sneakers = await response.json();

    return {
      props: {
        sneakers,
      },
    };
  } catch (err) {
    console.log("Ошибка, ", err);
    return {
      props: {},
    };
  }
};

export default Home;
