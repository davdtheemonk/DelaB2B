
import { AppState, StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react';
import 'react-native-gesture-handler'
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import HomeScreen from "./src/views/screens/HomeScreen"
import DetailsScreen from "./src/views/screens/DetailsScreen"
import COLORS from './src/const/colors';
import DetailScreens from "./src/views/screens/DetailsScreen"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation,MaterialIcons } from '@expo/vector-icons';
import ProfilePage from './src/views/screens/ProfilePage';
import SearchPage from './src/views/screens/SearchPage';
import ChatPage from './src/views/screens/ChatPage';
import NotificationsPage from './src/views/screens/NotificationsPage';
import { Provider } from 'react-redux';
import {store} from './store'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Onboard from './src/views/screens/Onboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from 'react-native-onboarding-swiper';
import RoomDetails from './src/views/screens/RoomDetails';
import Payment from './src/views/screens/Payment';
import Booking from './src/views/screens/Booking';
const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const Appstack = () =>{
 
  return (
 
    
      <Stack.Navigator screenOptions={{headerShown:false}}  >
      <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
     
        <Stack.Screen name="DetailsScreen" component={DetailsScreen}></Stack.Screen>
        <Stack.Screen name="RoomDetails" component={RoomDetails}></Stack.Screen>
        <Stack.Screen name="Payment" component={Payment}></Stack.Screen>
        <Stack.Screen name="Booking" component={Booking}></Stack.Screen>
       
      </Stack.Navigator>
   
  );
}
const OnboardingStack = () =>{
 
  return (
 
    
      <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName='OnboardingScreen'>
   <Stack.Screen name="OnboardingScreen" component={Onboard} ></Stack.Screen>
      </Stack.Navigator>
   
  );
}

const HomeTabs = () =>{
  const [onboarded, setOnboarded] = useState();  
  useEffect(() => {
    getStorage();
  }, []);  
  const getStorage = async () => {
    const onboarder = await AsyncStorage.getItem('ONBOARDED')
    setOnboarded(JSON.parse(onboarder));
    
  };
  return(
    <Provider store={store}>

    <Tab.Navigator barStyle={{ backgroundColor:"#212222"}} initialRouteName='Home'>

      
   <Tab.Screen
          name="Home"
          component={Appstack}
          options={{tabBarIcon : ({color})=>(
            <MaterialIcons name='home' size={24}  color={color}/>
          ),}}/>
      <Tab.Screen name="Search" component={SearchPage} options={{tabBarIcon : ({color})=>(
        <MaterialIcons name='search' size={24} color={color}/>
      ),}}/>
<Tab.Screen name="Feed" component={NotificationsPage} options={{tabBarIcon : ({color})=>(
        <MaterialIcons name='notifications' size={24}  color={color}/>
      ),}}/>
      <Tab.Screen name="Inbox" component={ChatPage} options={{tabBarIcon : ({color})=>(
        <MaterialIcons name='message' size={24} color={color}/>
      ),}}/>
      
      
    </Tab.Navigator>
  
    </Provider>
    
  )
}

const Rootnavigator = () =>{
  const [onboarded, setOnboarded] = useState();


  useEffect(() => {
    getStorage();
  }, []);

 
  const getStorage = async () => {
    const onboarded = await AsyncStorage.getItem('ONBOARDED');
    setOnboarded(JSON.parse(onboarded));
  };
return(
  <NavigationContainer>
    {!onboarded&&<OnboardingStack></OnboardingStack>}
    {onboarded&&<HomeTabs></HomeTabs>}
  </NavigationContainer>
)

}
export default Rootnavigator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
