import { Text, View } from "react-native"
import { useFoodContext } from "../context"

export const CartView = () => {
    const { cart, removeCart, incrementQuantity, decrementQuantity } = useFoodContext();
    return (
        <View>
            <Text>Cart View</Text>
        </View>
    )
}