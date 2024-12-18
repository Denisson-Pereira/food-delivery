import { useEffect } from "react";
import { DetailsProductsViewModel } from "../viewmodels/DetailsProductsViewModel"
import { GetById } from "../services/GetById";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../colors";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useFoodContext } from "../context";
import { IProducts } from "../interfaces/IProducts";
import { useNavigate } from "../hooks/useNavigate";
import { pattersValues } from "../helpers/pattersValues";

export const DetailsProductsView = () => {
    const { id, product, setProduct } = DetailsProductsViewModel();
    const { addCart, favorites, toggleFavorite } = useFoodContext();
    const { navigate } = useNavigate();

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

    const addBag = (item: IProducts) => {
        addCart(item)
        navigate('home')
        Alert.alert(
            'Success',
            'Product added to cart!',
            [
                { text: 'Continue shopping' }
            ]
        )
    }

    return (
        <View style={styles.view}>
            {product ? (
                <>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.favorite} onPress={() => toggleFavorite(product)}>
                            <AntDesign name={favorites.some(fav => fav.id === product.id) ? 'heart' : 'hearto'} color={favorites.some(fav => fav.id === product.id) ? 'red' : colors.grey} size={30} />
                        </TouchableOpacity>
                        <View style={styles.img}>
                            <Image source={{ uri: product.image }} style={{ width: 300, height: 300, resizeMode: 'contain' }} />
                        </View>
                        <View style={styles.blank}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={styles.name}>{product.name}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Entypo name="star" size={20} color={colors.yellow} />
                                    <Text>{product.evaluation}</Text>
                                    <Text>(41 Reviews)</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={styles.price}>
                                    <Text style={styles.txtprice1}>$ </Text>
                                    <Text style={styles.txtprice2}>{pattersValues(product.price)}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={styles.box}>
                                    <Text style={styles.sub}>Size</Text>
                                    <Text style={styles.txt}>{product.size}</Text>
                                </View>
                                <View style={styles.box}>
                                    <Text style={styles.sub}>Energy</Text>
                                    <Text style={styles.txt}>{product.energy}</Text>
                                </View>
                                <View style={styles.box}>
                                    <Text style={styles.sub}>Delivery</Text>
                                    <Text style={styles.txt}>{product.delivery}</Text>
                                </View>
                            </View>
                            <View style={styles.about}>
                                <Text style={{ fontSize: 20, fontWeight: '600' }}>About</Text>
                                <Text style={{ fontSize: 16, fontWeight: '400' }}>{product.about}.</Text>
                            </View>
                            <View style={styles.viewBtn}>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() => addBag(product)}
                                >
                                    <Text style={styles.txtBtn}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
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
        backgroundColor: colors.pink,
        flex: 1
    },
    container: {

    },
    img: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    blank: {
        backgroundColor: colors.white,
        height: '100%',
        paddingHorizontal: 20,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop: 20,
        gap: 30
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtprice1: {
        fontSize: 30,
        fontWeight: '700',
        color: colors.orange
    },
    txtprice2: {
        fontSize: 25,
        fontWeight: '700',
        color: colors.orange
    },
    name: {
        fontSize: 30,
        fontWeight: '600'
    },
    box: {
        borderWidth: 1.3,
        borderColor: colors.orange,
        borderRadius: 15,
        width: 110,
        height: 80,
        justifyContent: 'center',
        padding: 5,
        gap: 10
    },
    sub: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.orange
    },
    txt: {
        fontSize: 20,
        fontWeight: '600'
    },
    about: {
        gap: 20
    },
    btn: {
        backgroundColor: colors.orange,
        width: 350,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    viewBtn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBtn: {
        fontSize: 25,
        fontWeight: '600',
        color: colors.white
    },
    favorite: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        right: 10,
        backgroundColor: '#ffffff5e',
        padding: 5,
        borderRadius: 50,
    },
})