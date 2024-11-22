import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigate } from "../hooks/useNavigate";
import { useFoodContext } from "../context";
import { colors } from "../colors";
import { pattersValues } from "../helpers/pattersValues";

export const FavoritiesView = () => {
    const { favorites, toggleFavorite } = useFoodContext();
    const { navigate } = useNavigate();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Favorites</Text>
            </View>
            {favorites.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>You have no favorite items yet.</Text>
                </View>
            ) : (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContainer}
                >
                    {favorites.map((item) => (
                        <View style={styles.cardContainer} key={item.id}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigate('ProductsDetails', { id: item.id })}
                            >
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.image}
                                />
                                <View style={styles.infoContainer}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.priceOrange}>$</Text>
                                        <Text style={styles.priceBlack}>{pattersValues(item.price)}</Text>
                                    </View>
                                    <View style={styles.starContainer}>
                                        <Text style={styles.priceBlack}>{item.evaluation}</Text>
                                        <MaterialCommunityIcons name="star" color="#FFC529" />
                                        <Text style={styles.plus}>(25+)</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    onPress={() => toggleFavorite(item)}
                                    style={styles.favoriteButton}
                                >
                                    <AntDesign
                                        name={favorites.some(fav => fav.id === item.id) ? 'heart' : 'hearto'}
                                        color={favorites.some(fav => fav.id === item.id) ? colors.orange : 'white'}
                                        size={30}
                                    />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        color: colors.black,
    },
    scrollContainer: {
        paddingBottom: 150
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginVertical: 10,
        padding: 10,
        position: 'relative',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
        resizeMode: 'contain'
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    priceOrange: {
        color: colors.orange,
        fontSize: 16,
        fontWeight: '700',
    },
    priceBlack: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 16,
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    plus: {
        fontSize: 12,
        color: '#9796A1',
    },
    favoriteButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#ffffffc8',
        padding: 5,
        borderRadius: 50,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyText: {
        fontSize: 18,
        color: colors.black,
        textAlign: 'center',
    },
});
