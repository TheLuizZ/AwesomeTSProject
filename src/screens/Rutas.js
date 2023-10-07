import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Uno from '../screens/Uno';
import OtherScreen from '../screens/OtherScreen';
import Three from '../screens/Three';
import Four from '../screens/Four';
import SelectCountryScreen from './SelectCountryScreen';
import PDFExample from './PDFExample';

const Stack = createStackNavigator();

const Rutas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Uno" screenOptions={{ unmountOnBlur: true }}>
        <Stack.Screen name="Other" component={OtherScreen} />
        <Stack.Screen name="Uno" component={Uno} />
        <Stack.Screen name="Three" component={Three} />
        <Stack.Screen name="Four" component={Four} />
        <Stack.Screen name="SelectCountryScreen" component={SelectCountryScreen} />
        <Stack.Screen name="PDFExample" component={PDFExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rutas;
