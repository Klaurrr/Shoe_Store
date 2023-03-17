import React from "react";

type Props = {
    price: number;
    code: string;
    percent: number;
};

const GetCurrency = ({ price, code, percent }: Props) => {
    switch (code) {
        case "RUB":
            return (
                <>
                    {Math.floor(price - price * (percent / 100))},00₽
                    <span>{price},00₽</span>
                </>
            );
        case "USD":
            return (
                <>
                    {Math.floor(
                        Math.floor(price / 76) -
                            Math.floor(price / 76) * (percent / 100)
                    )}
                    ,00$
                    <span>{Math.floor(price / 76)},00$</span>
                </>
            );
        case `EUR`:
            return (
                <>
                    {Math.floor(
                        Math.floor(price / 81) -
                            Math.floor(price / 81) * (percent / 100)
                    )}
                    ,00€
                    <span>{Math.floor(price / 81)},00€</span>
                </>
            );
        case `CNY`:
            return (
                <>
                    {Math.floor(price / 11) -
                        Math.floor(Math.floor(price / 11) * (percent / 100))}
                    ,00¥
                    <span>{Math.floor(price / 11)},00¥</span>
                </>
            );
        case `GBP`:
            return (
                <>
                    {Math.floor(price / 91) -
                        Math.floor(Math.floor(price / 91) * (percent / 100))}
                    ,00£
                    <span>{Math.floor(price / 91)},00£</span>
                </>
            );
    }
};

export default GetCurrency;
