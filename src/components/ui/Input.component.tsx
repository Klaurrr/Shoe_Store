import { setSneakersInit } from "@/store/sneakersInitSlice";
import { Sneakers } from "@/types/sneakers";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Input = () => {
  const ref = useRef<any>(null);
  const [value, setValue] = useState("");

  const initialSneakers = useSelector(
    (state: { sneakersInit: { sneakers: Sneakers[] } }) =>
      state.sneakersInit.sneakers
  );

  const dispatch = useDispatch();

  //   const getValue = () => {
  //     console.log(
  //       initialSneakers.filter((sneaker) =>
  //         sneaker.model.toLowerCase().includes(ref.current.value.toLowerCase())
  //       )
  //     );
  //   };

  useEffect(() => {
    const handler = (key: any) => {
      if (key.key === "Enter") {
        // const newArray = initialSneakers.filter((item) =>
        //   item.model.toLowerCase().includes(ref.current.value.toLowerCase())
        // );
        // dispatch(setSneakersInit(newArray));

        console.log(
          initialSneakers.filter((item) =>
            item.model.toLowerCase().includes(ref.current.value.toLowerCase())
          )
        );
      }
    };

    const handleFocus = () => {
      window.addEventListener("keydown", handler);
    };
    const handleBlur = () => window.removeEventListener("keydown", handler);

    ref.current.addEventListener("focus", handleFocus);
    ref.current.addEventListener("blur", handleBlur);

    return () => {
      ref.current.removeEventListener("blur", handleBlur);
      ref.current.removeEventListener("focus", handleFocus);
    };
  }, [initialSneakers]);

  return (
    <input
      ref={ref}
      type="text"
      placeholder="Search"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
