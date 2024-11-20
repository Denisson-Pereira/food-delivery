import React, { SetStateAction } from "react";
import { ICategory } from "../interfaces/ICategory";

export interface HomeModel {
    categories: ICategory[];
    setCategories: React.Dispatch<SetStateAction<ICategory[]>>
}