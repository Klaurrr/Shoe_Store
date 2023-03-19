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
            console.log("Gg");
            if (!ref[0].current) return;
            if (!ref[0].current.contains(e.target as Node)) {
                isOpen.region &&
                    setIsOpen((prev: isOpen) => ({
                        ...prev,
                        region: false,
                    }));
            }
            if (!ref[1].current) return;
            if (!ref[1].current.contains(e.target as Node)) {
                isOpen.forex &&
                    setIsOpen((prev: isOpen) => ({ ...prev, forex: false }));
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [isOpen, ref, setIsOpen]);
};

export default UseOutsideClick;
