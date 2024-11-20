import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartView, FavoritiesView, HomeView } from "../views"; 
import { Feather, SimpleLineIcons, FontAwesome, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: colors.orange,
                tabBarInactiveTintColor: colors.grey, 
                tabBarStyle: {
                    height: 110,
                    justifyContent: 'center',
                    borderTopLeftRadius: 30, 
                    borderTopRightRadius: 30, 
                    backgroundColor: 'white', 
                    borderTopWidth: 1, 
                    borderColor: '#83838321',
                    borderRightWidth: 1,
                    borderLeftWidth: 1,
                    position: 'absolute', 
                    shadowColor: '#8f8f8f6a',
                    shadowOffset: { width: 10, height: 5 },
                    shadowOpacity: 0.55,
                    shadowRadius: 10,
                    elevation: 10,
                },
                tabBarIconStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20
                }
            })}
        >
            <Tab.Screen
                name="homeView"
                component={HomeView}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{ alignItems: "center" }}>
                            {focused && <View style={styles.activeBar} />}
                            <Entypo name="home" color={color} size={size} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: focused ? "bold" : "normal",
                                color: focused ? colors.orange : colors.grey,
                            }}
                        >
                            Home
                        </Text>
                    ),
                }}
            />

            <Tab.Screen
                name="cartView"
                component={CartView}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{ alignItems: "center" }}>
                            {focused && <View style={styles.activeBar} />} 
                            <FontAwesome5 name="shopping-bag" color={color} size={size} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: focused ? "bold" : "normal",
                                color: focused ? colors.orange : colors.grey,
                            }}
                        >
                            Cart
                        </Text>
                    ),
                }}
            />

            <Tab.Screen
                name="favoritiesView"
                component={FavoritiesView}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{ alignItems: "center" }}>
                            {focused && <View style={styles.activeBar} />} 
                            <FontAwesome name="heart" color={color} size={size} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: focused ? "bold" : "normal",
                                color: focused ? colors.orange : colors.grey,
                            }}
                        >
                            Favorites
                        </Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    activeBar: {
        height: 8,
        width: 40,
        backgroundColor: colors.orange, 
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        position: "absolute",
        top: -25,
    },
});
