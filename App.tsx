import { View, Text } from 'react-native'
import React from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Splash from './components/Splash'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}} >
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name="Login" component={Login}  />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default App