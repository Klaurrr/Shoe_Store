import React, { FC, useLayoutEffect } from "react";

import MainLayout from "@/layouts/MainLayout.component";
import SneakerPanel from "@/components/ui/SneakerPanel.component";
import Carousel from "@/components/shared/Carousel.component";
import SneakerCard from "@/components/ui/SneakerCard.component";

import { useDispatch, useSelector } from "react-redux";
import { setSneakersInit } from "@/store/slices/sneakersInitSlice";

import { Sneakers } from "@/types/sneakers";

import styles from "@/styles/pages/Home.module.scss";

const Home: FC<{ sneakers: Sneakers[] }> = ({ sneakers }) => {
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(setSneakersInit(sneakers));
    }, [sneakers]);

    const data = useSelector(
        (state: { sneakersInit: { sneakers: Sneakers[] } }) =>
            state.sneakersInit.sneakers
    );

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
            <section className={styles.container}>
                {data?.length > 0 ? (
                    data.map((sneaker: Sneakers) => (
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
                    <>
                        <p>Empty, try research</p>
                    </>
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
