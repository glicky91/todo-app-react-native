import { useState } from "react";
import Constants from 'expo-constants';
import { View, Platform } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import DetailScreen from "./DetailScreen";
import NewTaskScreen from "./NewTaskScreen";
//This page is for all of the navigation features 

//change to navigation
const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <Stack.Screen
                name="Add New Task"
                component={NewTaskScreen}
                options={{ title: 'Add New Task' }}
            />
            <Stack.Screen
                name='Details'
                component={DetailScreen}
                options={({ route }) => ({
                    title: route.params.task.name
                })}
            />

        </Stack.Navigator>
    )
};

const AboutNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenoptions}>
            <Stack.Screen
                name="About Us"
                component={AboutScreen}
                options={{ title: "About Us" }}
            />
        </Stack.Navigator>
    )
}
const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#FF5733' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name='About Us'
                    component={AboutNavigator}
                    options={{ title: 'About Us' }}
                />
            </Drawer.Navigator>
        </View>
    )
}

export default Main;
