import React, { FC } from "react";

import MainLayout from "@/layouts/MainLayout.component";

import { Sneakers } from "@/types/sneakers";

import sneakersImage from "@/assets/Sneakers/sneakers";
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
        <SneakerPanel background={"#FFE2B5"} />
        <SneakerPanel background={"red"} />
        <SneakerPanel background={"green"} />
        <SneakerPanel background={"blue"} />
        <SneakerPanel background={"aqua"} />
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
