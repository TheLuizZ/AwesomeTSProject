import { SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import Rutas from './src/screens/Rutas';

export const App = () => {
  useEffect(() => {
    console.log('App Primero');
    // Este efecto se ejecuta cuando se monta la pantalla
    return () => {
        console.log('App Segundo');
    };
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Rutas />
    </SafeAreaView>
  );
}

export default App;
