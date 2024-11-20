import { Fontisto } from "@expo/vector-icons"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../colors"
import { Header } from "../components"
import { FindBar } from "../components/FindBar"
import { HomeViewModel } from "../viewmodels"
import { useEffect, useState } from "react"
import { GetAll } from "../services/GetAll"
import { ICategory } from "../interfaces/ICategory"

export const HomeView = () => {
    const { categories, setCategories} = HomeViewModel();

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
            <FindBar />
            <View>
                <Text>Categories</Text>
                <ScrollView 
                style={styles.scrollHorizontal}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                >
                    {categories.map((item) => (
                        <TouchableOpacity 
                            key={item.id}
                            style={styles.touch}
                        >
                            <Image 
                                source={{ uri: item.image }} 
                                style={styles.img}
                            />
                            <Text style={styles.txt}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: colors.white
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
    touch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.orange,
        gap: 10,
        padding: 10,
        marginRight: 10,
        borderRadius: 10
    }
})