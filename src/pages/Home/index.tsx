import React, { FC } from "react";

import MainLayout from "@/layouts/MainLayout.component";

import { Sneakers } from "@/types/sneakers";

import sneakersImage from "@/assets/sneakers";
import SneakerPanel from "@/components/ui/SneakerPanel.component";

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
      <SneakerPanel background={"#FFE2B5"} />
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
