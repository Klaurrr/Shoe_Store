import { useCallback, useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { setSneakersInit } from "@/store/sneakersInitSlice";

import { Sneakers } from "@/types/sneakers";

import initialSneakers from "db.json";

const Input = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  const { sneakers } = initialSneakers;

  const handleEnter = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const newArray: Sneakers[] = sneakers.filter((item) =>
          item.model
            .toLowerCase()
            .includes(ref?.current?.value.toLowerCase() ?? "")
        );
        dispatch(setSneakersInit(newArray));
      }
    },
    [dispatch, sneakers, ref]
  );

  const handleFocus = useCallback(() => {
    window.addEventListener("keydown", handleEnter);
  }, [handleEnter]);

  const handleBlur = useCallback(() => {
    window.removeEventListener("keydown", handleEnter);
  }, [handleEnter]);

  useEffect(() => {
    ref.current?.addEventListener("focus", handleFocus);
    ref.current?.addEventListener("blur", handleBlur);

    return () => {
      ref.current?.removeEventListener("focus", handleFocus);
      ref.current?.removeEventListener("blur", handleBlur);
    };
  }, [handleBlur, handleFocus]);

  return <input ref={ref} type="text" placeholder="Search" />;
};

export default Input;
