import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Stack = createNativeStackNavigator();

const routeScreenDefaultOptions = {
    headerStyle: {
        backgroundColor: "rgba(7, 26, 93, 255)"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        color: "#fff",
    },
    headerTitleAlign: "center"
}
const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={routeScreenDefaultOptions} />
                <Stack.Screen name="Detail" component={Detail} options={routeScreenDefaultOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes