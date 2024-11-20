import { Fontisto } from "@expo/vector-icons"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../colors"
import { FindBar, Header, Title } from "../components"
import { HomeViewModel } from "../viewmodels"
import { useEffect, useState } from "react"
import { GetAll } from "../services/GetAll"

export const HomeView = () => {
    const { categories, setCategories, valor, toggleValor} = HomeViewModel();

    useEffect(() => {
        async function fetchData() {
            const response = await GetAll('categories');
            setCategories(response);
        }
        fetchData();
    }, [])

    return (
        <ScrollView style={styles.scroll}>
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
})