import { useState } from "react";
import { CartModel } from "../models";

export const CartViewModel = (): CartModel => {
    const [subtotal, setSubtotal] = useState<number>(0);
    const [tax, setTax] = useState<number>(5.30);
    const [delivery, setDelivery] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);

    return {subtotal, tax, delivery, total, setSubtotal, setTax, setDelivery, setTotal };
}