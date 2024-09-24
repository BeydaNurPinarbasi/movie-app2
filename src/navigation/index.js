import{View, Text} from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from "../screens/SearchScreen";
import SavedScreen from "../screens/SavedScreen";
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';


const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();





export default function AppNavigation(){

    function HomeStack(){

return(
    <stack.Navigator 
    screenOptions={{
        headerShown:false,
    }}
initialRouteName="Welcome"
>
        <stack.Screen name= "HomeTab" component = {HomeTabs}/>
        <stack.Screen name="Welcome" component={WelcomeScreen} />

    </stack.Navigator>  
    );
}
function HomeTabs(){
    return(

<Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name= "Search" component= {SearchScreen}/>
    <Tab.Screen name="Saved" component = {SavedScreen}/>
</Tab.Navigator>
    );
}
    return(
        <NavigationContainer>
        <HomeStack />
        </NavigationContainer>
    );
}