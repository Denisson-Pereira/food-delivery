import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { IProducts } from "../interfaces/IProducts";
import { useNavigate } from "../hooks/useNavigate";
import { GetAll } from "../services/GetAll";
import { colors } from "../colors";

export const FindBar = () => {
    const [products, setProducts] = useState<IProducts[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>(""); 
    const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);

    const { navigate } = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            const response = await GetAll("products");
            setProducts(response);
        }
        fetchProducts();
    }, []);

    useEffect(() => {
        if (searchTerm === "") {
            setFilteredProducts([]); 
        } else {
            setFilteredProducts(
                products.filter(product =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, products]);

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <View style={styles.inputContainer}>
                    <AntDesign name="search1" size={25} color='#767F9D' />
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        value={searchTerm}
                        onChangeText={setSearchTerm} 
                    />
                </View>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="tune-variant" style={styles.icon} />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.productList}>
                {searchTerm !== "" && filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <TouchableOpacity 
                            key={item.id} 
                            style={styles.productContainer}
                            onPress={() => navigate('ProductsDetails', { id: item.id })}
                        >
                            <Image 
                                source={{ uri: item.image }} 
                                style={styles.img}
                            />
                            <View>
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text>{item.description}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    searchTerm !== "" && <Text style={styles.noResults}>No products found</Text>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        fontSize: 35,
        borderWidth: 1,
        padding: 5,
        color: colors.orange,
        borderColor: colors.orange,
        borderRadius: 8
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FCFCFD',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        width: "85%",
        height: 55,
        gap: 10,
        paddingHorizontal: 20,
    },
    input: {
        fontSize: 17,
        fontWeight: '600',
        flex: 1,
    },
    productContainer: {
        marginTop: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        flexDirection: 'row',
        gap: 10
    },
    productName: {
        fontSize: 18,
        fontWeight: '600',
    },
    noResults: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FE724C',
        textAlign: 'center',
        marginTop: 20,
    },
    productList: {
        marginTop: 10,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 10,
        resizeMode: 'contain'
    }
});