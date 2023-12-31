import { View, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';



function Uno() {
  const navigation = useNavigation();

  useEffect(() => {
    console.log('Uno Entro');
    // Este efecto se ejecuta cuando se monta la pantalla
    return () => {
        console.log('Uno Salio');
    };
  }, []);
  
  return (
    <View>
      <Button
        title="Ir a Otra Pantalla"
        onPress={() => navigation.navigate('Other')}
      />
    </View>
  );
}

export default Uno;