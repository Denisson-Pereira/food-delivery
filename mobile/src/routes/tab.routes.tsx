import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartView, FavoritiesView, HomeView } from "../views"; 
import { Feather, SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#FE724C",
                tabBarInactiveTintColor: "#D3D1D8", 
                tabBarStyle: {
                    height: 110,
                    justifyContent: 'center',
                    borderTopLeftRadius: 30, 
                    borderTopRightRadius: 30, 
                    overflow: "hidden",
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
                            <Feather name="home" color={color} size={size} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: focused ? "bold" : "normal",
                                color: focused ? "#FE724C" : "#D3D1D8",
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
                            <SimpleLineIcons name="list" color={color} size={size} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: focused ? "bold" : "normal",
                                color: focused ? "#FE724C" : "#D3D1D8",
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
                                color: focused ? "#FE724C" : "#D3D1D8",
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
        backgroundColor: "#FE724C", 
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        position: "absolute",
        top: -25,
    },
});
