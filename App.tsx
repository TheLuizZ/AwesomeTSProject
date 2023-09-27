import React from 'react';
import {SafeAreaView,} from 'react-native';
import { OlvidasteTuPIN } from './src/OlvidasteTuPIN/OlvidasteTuPIN';
import { AdquirirTarjetaFisica } from './src/AdquirirTarjetaFisica/AdquirirTarjetaFisica';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Uno from './src/screens/Uno'; // Importa tu pantalla principal
import OtherScreen from './src/screens/OtherScreen'; // Importa la pantalla a la que quieres navegar
import Three from './src/screens/Three'; // Importa la pantalla a la que quieres navegar

const Stack = createStackNavigator();

// export const App = () =>{
//   return(
//     <SafeAreaView style = {{flex: 1,}}>
//       {/* <AdquirirTarjetaFisica/> */}
//       <OlvidasteTuPIN/>
//     </SafeAreaView>
//   )
// }

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Uno">
        <Stack.Screen name="Other" component={OtherScreen} />
        <Stack.Screen name="Uno" component={Uno} />
        <Stack.Screen name="Three" component={Three} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
