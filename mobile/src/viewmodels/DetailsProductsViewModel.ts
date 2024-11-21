import { useState } from "react";
import { DetailsProductsModel } from "../models/DetailsProductsModel";
import { IProducts } from "../interfaces/IProducts";
import { useRoute } from "@react-navigation/native";
import { ProductsDetailsRouteProp } from "../types/navigationTypes";


export const DetailsProductsViewModel = (): DetailsProductsModel => {
    const [product, setProduct] = useState<IProducts | null>(null);
    const route = useRoute<ProductsDetailsRouteProp>();
    const { id } = route.params;
    return {product, id, setProduct, };
}