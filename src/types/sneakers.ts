import sneakers from "@/assets/Sneakers/sneakers"

export type Sneakers = {
      map: any
      id: number,
      brend: string,
      model: string,
      image: keyof typeof sneakers,
      price: number,
      color: string
}