import { IProducts } from "../interfaces/IProducts"

export interface DetailsProductsModel {
    product: IProducts | null
    id: number
    setProduct: React.Dispatch<React.SetStateAction<IProducts | null>>
}