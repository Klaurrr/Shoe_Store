import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

interface isOpen {
    region: boolean;
    forex: boolean;
}

const UseOutsideClick = (
    ref: [RefObject<HTMLDivElement>, RefObject<HTMLDivElement>],
    isOpen: isOpen,
    setIsOpen: Dispatch<SetStateAction<isOpen>>
): void => {
    useEffect(() => {
        const handler = (e: MouseEvent): void => {
            if (
                isOpen.region &&
                ref[0].current &&
                !ref[0].current.contains(e.target as Node)
            ) {
                setIsOpen((prev: isOpen) => ({
                    ...prev,
                    region: false,
                }));
            }
            if (
                isOpen.forex &&
                ref[1].current &&
                !ref[1].current.contains(e.target as Node)
            ) {
                setIsOpen((prev: isOpen) => ({ ...prev, forex: false }));
            }
        };

        if (isOpen.region || isOpen.forex) {
            document.addEventListener("mousedown", handler);
        }

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [isOpen, ref, setIsOpen]);
};

export default UseOutsideClick;
