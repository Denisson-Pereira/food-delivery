import React, { createContext, useContext, useEffect, useState } from "react";
import { IProducts } from "../interfaces/IProducts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface CartItem extends IProducts {
    cartId: string;
    quantity: number;
}

type FoodProps = {
    cart: CartItem[];
    addCart: (item: IProducts) => void;
    removeCart: (cartId: string) => void;
    incrementQuantity: (cartId: string) => void;
    decrementQuantity: (cartId: string) => void;
    quantidadeCart: string;
    favorites: IProducts[];
    toggleFavorite: (item: IProducts) => void;
}

type Props = {
    children: React.ReactNode;
}

const Context = createContext<FoodProps>({} as FoodProps);

export const FoodProvider: React.FC<Props> = ({ children }: Props) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [quantidadeCart, setQuantidadeCart] = useState<string>('');

    const [favorites, setFavorites] = useState<IProducts[]>([]);

    useEffect(() => {
        const loadCart = async () => {
            const storedCart = await AsyncStorage.getItem('@Cart');
            if (storedCart) {
                const parsedCart = JSON.parse(storedCart);
                setCart(parsedCart);
                setQuantidadeCart(parsedCart.length.toString());
            }
        }
        loadCart();
    }, []);

    const updateCartAndQuantity = async (updatedCart: CartItem[]) => {
        setCart(updatedCart);
        setQuantidadeCart(updatedCart.length.toString());
        await AsyncStorage.setItem('@Cart', JSON.stringify(updatedCart));
    };

    const addCart = async (item: IProducts) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            const updatedCart = cart.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            updateCartAndQuantity(updatedCart);
        } else {
            const newItem: CartItem = { ...item, cartId: Date.now().toString(), quantity: 1 };
            const updatedCart = [...cart, newItem];
            updateCartAndQuantity(updatedCart);
        }
    };

    const removeCart = async (cartId: string) => {
        const updatedCart = cart.filter(item => item.cartId !== cartId);
        updateCartAndQuantity(updatedCart);
    };

    const incrementQuantity = async (cartId: string) => {
        const updatedCart = cart.map(cartItem =>
            cartItem.cartId === cartId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        updateCartAndQuantity(updatedCart);
    };

    const decrementQuantity = async (cartId: string) => {
        const updatedCart = cart.map(cartItem =>
            cartItem.cartId === cartId && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        );
        updateCartAndQuantity(updatedCart);
    };

    useEffect(() => {
        const loadFavorites = async () => {
            const storedFavorites = await AsyncStorage.getItem('@favorites');
            if (storedFavorites) {
                setFavorites(JSON.parse(storedFavorites));
            }
        };
        loadFavorites();
    }, []);

    const toggleFavorite = async (item: IProducts) => {
        let updatedFavoritesEstablishment;
        if (favorites.find(fav => fav.id === item.id)) {
            updatedFavoritesEstablishment = favorites.filter(fav => fav.id !== item.id);
        } else {
            updatedFavoritesEstablishment = [...favorites, item];
        }
        setFavorites(updatedFavoritesEstablishment);
        await AsyncStorage.setItem('@favorites', JSON.stringify(updatedFavoritesEstablishment));
    };

    const values = { cart, addCart, quantidadeCart, removeCart, incrementQuantity, decrementQuantity, favorites, toggleFavorite }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    );
}

export const useFoodContext = () => {
    const foodConstant = useContext(Context);
    return foodConstant;
}