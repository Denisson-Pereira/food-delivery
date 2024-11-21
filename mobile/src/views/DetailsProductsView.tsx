import { useEffect } from "react";
import { DetailsProductsViewModel } from "../viewmodels/DetailsProductsViewModel"
import { GetById } from "../services/GetById";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";

export const DetailsProductsView = () => {
    const { id, product, setProduct } = DetailsProductsViewModel();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await GetById('products', id);
                setProduct(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id])
    return (
        <View style={styles.view}>
            {product ? (
                <>
                    <Text>{product.name}</Text>
                </>
            ) : (
                <Text>No data!</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 70,
        paddingHorizontal: 15,
        backgroundColor: colors.pink,
    }
})