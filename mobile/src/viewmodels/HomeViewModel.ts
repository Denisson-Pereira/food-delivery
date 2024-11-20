import { useState } from "react";
import { HomeModel } from "../models";
import { ICategory } from "../interfaces/ICategory";

export const HomeViewModel = (): HomeModel => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    
    return {categories, setCategories};
}