import { useState } from "react";
import { HomeModel } from "../models";
import { ICategory } from "../interfaces/ICategory";
import { IProducts } from "../interfaces/IProducts";

export const HomeViewModel = (): HomeModel => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [products, setProducts] = useState<IProducts[]>([]);

    const [valor, setValor] = useState<number>(1);

    const toggleValor = (id: number) => {
        setValor(id);
    }

    const filteredProducts = products.filter((item) => {
        if (valor === 1) return item.category === 'Burger';
        if (valor === 2) return item.category === 'Pizza';
        if (valor === 3) return item.category === 'Sandwich';
        if (valor === 4) return item.category === 'Natural';
        if (valor === 5) return item.category === 'Fruits';
        return false;
    });

    return { categories, valor, products, setProducts, setCategories, setValor, toggleValor, filteredProducts }
}