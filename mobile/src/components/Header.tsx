import { Fontisto } from "@expo/vector-icons"
import { Image, StyleSheet, Text, View } from "react-native"
import { colors } from "../colors"

export const Header = () => {
    return (
        <View style={styles.container}>
            <Fontisto name="map-marker-alt" color={colors.orange} size={25} />
            <Text style={styles.txtHeader}>Nevada, US</Text>
            <Fontisto name="angle-down" color={colors.orange} size={15} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    txtHeader: {
        fontSize: 20,
        fontWeight: '700'
    },
})