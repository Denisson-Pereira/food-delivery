import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DetailsProductsView, InitialView } from "../views";
import { TabRoutes } from "./tab.routes";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="initial" component={InitialView}  />
                <Stack.Screen name="home" component={TabRoutes} />
                <Stack.Screen name="ProductsDetails" component={DetailsProductsView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}