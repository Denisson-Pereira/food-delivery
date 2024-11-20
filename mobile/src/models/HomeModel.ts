import React, { SetStateAction } from "react";
import { ICategory } from "../interfaces/ICategory";

export interface HomeModel {
    categories: ICategory[];
    valor: number
    setCategories: React.Dispatch<SetStateAction<ICategory[]>>
    setValor: React.Dispatch<SetStateAction<number>>
    toggleValor: (id: number) => void
}