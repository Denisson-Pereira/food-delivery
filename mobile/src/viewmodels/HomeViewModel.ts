import { useState } from "react";
import { HomeModel } from "../models";
import { ICategory } from "../interfaces/ICategory";

export const HomeViewModel = (): HomeModel => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    const [valor, setValor] = useState<number>(1);

    const toggleValor = (id: number) => {
        setValor(id);
    }

    return { categories, valor, setCategories, setValor, toggleValor }
}