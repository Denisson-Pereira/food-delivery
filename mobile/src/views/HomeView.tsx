import { Fontisto } from "@expo/vector-icons"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { colors } from "../colors"
import { Header } from "../components"
import { FindBar } from "../components/FindBar"

export const HomeView = () => {
    return (
        <ScrollView style={styles.scroll}>
            <Header />
            <FindBar />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: colors.white
    },
})