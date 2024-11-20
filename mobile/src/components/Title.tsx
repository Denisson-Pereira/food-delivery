import { Image, StyleSheet, Text, View } from "react-native"

export const Title = () => {
    return (
        <View style={styles.container2}>
            <Text style={styles.txt}>Order Your Food Fast and Free</Text>
            <Image
                style={styles.image}
                source={require('../assets/delivery.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container2: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    txt: {
        fontSize: 30,
        width: 250,
        fontWeight: '500'
    },
    image: {

    }
})