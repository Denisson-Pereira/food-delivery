import React from "react";
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../colors";
import { InitialViewModel } from "../viewmodels";

export const InitialView = () => {
    const { skip } = InitialViewModel();

    return (
        <ImageBackground
            style={styles.bg}
            source={require('../assets/bg.png')}
        >
            <View style={styles.container}>
                <View style={styles.viewTxt}>
                    <Text style={styles.txtBig}>Find and Get Your Best Food</Text>
                    <Text style={styles.txtSmall}>Find the most delicious food with the best quality and free delivery here</Text>
                </View>
                <TouchableOpacity>
                    <Image
                        style={styles.btn}
                        source={require('../assets/btn.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={skip}>
                    <Text style={styles.txt}>Skip</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg: {
        height: Dimensions.get("window").height,
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        gap: 50,
        backgroundColor: '#0000002d'
    },
    viewTxt: {
        marginTop: 400,
        gap: 20
    },
    txtBig: {
        color: colors.white,
        fontSize: 40,
        fontWeight: '600',
        paddingRight: 100
    },
    txtSmall: {
        color: colors.white,
        fontSize: 20,
        paddingRight: 50
    },
    btn: {
        width: 80,
        height: 80,
    },
    txt: {
        color: colors.grey,
        fontSize: 20
    }
});