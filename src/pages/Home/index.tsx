import React, { FC } from "react";

import MainLayout from "@/layouts/MainLayout.component";

import { Sneakers } from "@/types/sneakers";

import SneakerPanel from "@/components/ui/SneakerPanel.component";
import Carousel from "@/components/shared/Carousel";

const Home: FC<{ sneakers: Sneakers }> = ({ sneakers }) => {
  {
    /*  <div>
  {sneakers.map((sneaker: Sneakers) => (
    <div key={sneaker.id}>
      <div>{sneaker.model}</div>
      <img src={sneakersImage[sneaker.image].src} alt="sneaker-img" />
    </div>
  ))}
  </div> */
  }
  return (
    <MainLayout>
      <Carousel>
        <SneakerPanel background={"rgb(100%, 89%, 71%)"} />
        <SneakerPanel background={"rgb(47%, 89%, 59%)"} />
        <SneakerPanel background={"rgb(96%, 90%, 100%)"} />
        <SneakerPanel background={"rgb(41%, 92%, 92%)"} />
      </Carousel>
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch("http://localhost:3001/sneakers");

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
