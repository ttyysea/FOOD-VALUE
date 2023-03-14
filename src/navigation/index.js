
import { View, Text ,Dimensions} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import InputProfileScreen from '../screens/InputProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import LoveScreen from '../screens/LoveScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FoodScreen from '../screens/FoodScreen/FoodScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import NorthScreen from '../screens/NorthScreen';
import SouthScreen from '../screens/SouthScreen/SouthScreen';
import CentralScreen from '../screens/CentralScreen/CentralScreen';
import NortheastScreen from '../screens/NortheastScreen';
import RestaurantFoodScreen from '../screens/RestaurantFoodScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function TabNavigation() {
  return (
    
    <Tab.Navigator 
        screenOptions={{headerShown: false, tabBarActiveTintColor: 'white', tabBarInactiveTintColor: 'black',tabBarStyle: {backgroundColor: '#494948',borderBottomColor:'black'}}}>
                <Tab.Screen 
                    name="home"
                    component={HomeScreen}
                    options={{ 
                        tabBarShowLabel:false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Search'
                    component={SearchScreen} 
                    options={{ 
                        tabBarShowLabel:false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="search" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Love'
                    component={LoveScreen} 
                    options={{ 
                        tabBarShowLabel:false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon solid name="heart" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Profile'
                    component={ProfileScreen} 
                    options={{ 
                        tabBarShowLabel:false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon solid name="user" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="InputProfile" component={InputProfileScreen} />
        <Stack.Screen name="Food" component={FoodScreen}/>
        <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
        <Stack.Screen name="North" component={NorthScreen}/>
        <Stack.Screen name="South" component={SouthScreen}/>
        <Stack.Screen name="Central" component={CentralScreen}/>
        <Stack.Screen name="Northeast" component={NortheastScreen}/>
        <Stack.Screen name="RestaurantFood" component={RestaurantFoodScreen}/>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}






export default Navigation;