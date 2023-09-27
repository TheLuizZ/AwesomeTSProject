import React, { useState, useEffect } from 'react';
import { View, Text, Switch, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Three() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [nombre, setNombre] = useState('');

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  useEffect(() => {
    console.log('Three Primero');
    // Este efecto se ejecuta cuando se monta la pantalla
    return () => {
        console.log('Three Segundo');
      // Esta función se ejecutará cuando se desmonte la pantalla
      setIsEnabled(false); // Restablece el estado del switch
      setNombre(''); // Limpia el campo de entrada de texto
    };
  }, []);

  const screenStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green', // Cambia el color de fondo a verde
  };

  return (
    <View style={screenStyle}>
      <Text>Three</Text>
      <TextInput
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {isEnabled && (
        <Button
          title="Regresar a la Pantalla Principal"
          onPress={() => navigation.navigate('Uno')}
        />
      )}
    </View>
  );
}

export default Three;