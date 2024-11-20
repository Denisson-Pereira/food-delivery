import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CartView, FavoritiesView, HomeView } from "../views";
import { Feather, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#00A6EB',
                },
                headerTintColor: '#fff',
                tabBarStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 90,
                    backgroundColor: '#ffffff',
                },
                tabBarActiveTintColor: '#00A6EB',
            }}
        >
            <Tab.Screen
                name='home'
                component={HomeView}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name='cart'
                component={CartView}
                options={{
                    tabBarIcon: ({ color, size }) => <SimpleLineIcons name='list' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name='favorities'
                component={FavoritiesView}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name='heart' color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    )
}