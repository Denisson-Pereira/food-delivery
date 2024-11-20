import { Fontisto } from "@expo/vector-icons"
import { Image, StyleSheet, Text, View } from "react-native"
import { colors } from "../colors"

export const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Fontisto name="map-marker-alt" color={colors.orange} size={25} />
                <Text style={styles.txtHeader}>Nevada, US</Text>
                <Fontisto name="angle-down" color={colors.orange} size={15} />
            </View>
            <View style={styles.container2}>
                <Text style={styles.txt}>Order Your Food Fast and Free</Text>
                <Image 
                    style={styles.image}
                    source={require('../assets/delivery.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 10
    },
    txtHeader: {
        fontSize: 20,
        fontWeight: '700'
    },
    txt: {
        fontSize: 30,
        width: 250,
        fontWeight: '500'
    },
    image: {

    }
})