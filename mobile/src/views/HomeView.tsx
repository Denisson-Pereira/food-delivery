import { AntDesign, Entypo, Fontisto } from "@expo/vector-icons"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../colors"
import { FindBar, Header, Title } from "../components"
import { HomeViewModel } from "../viewmodels"
import { useEffect, useState } from "react"
import { GetAll } from "../services/GetAll"

export const HomeView = () => {
    const { categories, setCategories, valor, toggleValor, products, setProducts, filteredProducts } = HomeViewModel();

    useEffect(() => {
        async function fetchData() {
            const responseCategory = await GetAll('categories');
            const responseProducts = await GetAll('products');
            setCategories(responseCategory);
            setProducts(responseProducts);
        }
        fetchData();
    }, []);

    return (
        <ScrollView 
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
        >
            <Header />
            <Title />
            <FindBar />
            <View>
                <Text style={styles.title}>Categories</Text>
                <ScrollView
                    style={styles.scrollHorizontal}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                >
                    {categories.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={valor === item.id ? styles.touch : styles.touch2}
                            onPress={() => toggleValor(item.id)}
                        >
                            <Image
                                source={{ uri: item.image }}
                                style={styles.img}
                            />
                            <Text style={valor === item.id ? styles.txt : styles.txt2}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.grid}>
                {filteredProducts.map((item) => (
                    <TouchableOpacity 
                        key={item.id}
                        style={styles.container}    
                    >
                        <View style={styles.star}>
                            <Entypo name="star" size={20} color={colors.yellow} />
                            <Text>{item.evaluation}</Text>
                        </View>
                        <View style={styles.image}>
                            <Image
                                source={{ uri: item.image }}
                                style={{ width: 100, height: 100, resizeMode: 'contain' }}
                            />
                        </View>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <View style={styles.containerPrice}>
                            <View style={styles.price}>
                                <Text style={styles.txtprice1}>$ </Text>
                                <Text style={styles.txtprice2}>{item.price}.</Text>
                                <Text style={styles.txtprice3}>00</Text>
                            </View>
                            <TouchableOpacity style={styles.plus}>
                                <AntDesign name="plus" size={20} color={colors.white} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        paddingTop: 70,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
    },
    scrollHorizontal: {

    },
    txt: {
        fontSize: 20,
        color: colors.white,
        fontWeight: '600'
    },
    img: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 22,
        paddingBottom: 10,
        fontWeight: '500'
    },
    touch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.orange,
        gap: 10,
        padding: 10,
        marginRight: 10,
        borderRadius: 10
    },
    touch2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        gap: 10,
        padding: 10,
        marginRight: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.orange
    },
    txt2: {
        fontSize: 20,
        color: colors.black,
        fontWeight: '700'
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    container: {
        width: "48%",
        padding: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: '#8f8f8f44',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 0.55,
        shadowRadius: 10,
        elevation: 10,
        gap: 5
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 15,
        marginBottom: 150
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        fontSize: 13
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
    },
    plus: {
        backgroundColor: colors.orange,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    containerPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    price: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    txtprice1: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.orange
    },
    txtprice2: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.orange
    },
    txtprice3: {
        fontWeight: '500',
        color: colors.orange
    },
})