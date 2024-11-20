import React, { SetStateAction } from "react";
import { ICategory } from "../interfaces/ICategory";
import { IProducts } from "../interfaces/IProducts";

export interface HomeModel {
    categories: ICategory[]
    valor: number
    products: IProducts[]
    setCategories: React.Dispatch<SetStateAction<ICategory[]>>
    setProducts: React.Dispatch<SetStateAction<IProducts[]>>
    setValor: React.Dispatch<SetStateAction<number>>
    toggleValor: (id: number) => void
    filteredProducts: IProducts[]
}