import sneakers from "@/assets/Sneakers/sneakers";

export type Sneakers = {
    id: number;
    brend: string;
    model: string;
    image: keyof typeof sneakers;
    price: number;
    color?: string;
    action?: string;
};
