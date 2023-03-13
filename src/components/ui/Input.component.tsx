import { setSneakersInit } from "@/store/sneakersInitSlice";
import { Sneakers } from "@/types/sneakers";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Input = () => {
  const ref = useRef<any>(null);

  const initialSneakers = useSelector(
    (state: { sneakersInit: { sneakers: Sneakers[] } }) =>
      state.sneakersInit.sneakers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        console.log("handler");
        const newArray = initialSneakers.filter((item) =>
          item.model.toLowerCase().includes(ref.current?.value.toLowerCase())
        );
        dispatch(setSneakersInit(newArray));
      }
    };

    const handleFocus = () => {
      window.addEventListener("keydown", handler);
    };
    const handleBlur = () => {
      window.removeEventListener("keydown", handler);
    };

    ref.current.addEventListener("focus", handleFocus);
    ref.current.addEventListener("blur", handleBlur);

    return () => {
      ref.current?.removeEventListener("focus", handleFocus);
      ref.current?.removeEventListener("blur", handleBlur);
    };
  }, [initialSneakers]);

  return <input ref={ref} type="text" placeholder="Search" />;
};

export default Input;
