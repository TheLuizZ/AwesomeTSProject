import React, { useState, useEffect } from 'react';
import { View, Text, Switch, Button, TextInput } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

function Four() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [nombre, setNombre] = useState('');

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  useFocusEffect(
    React.useCallback(() => {
      console.log('Pase Por el useCallBack Four');
      setIsEnabled(false); // Restablecer el estado del interruptor
      setNombre(''); // Limpia el campo de entrada de texto
    }, [])
  );

  useEffect(() => {
    console.log('Four Entro');
    // Este efecto se ejecuta cuando se monta la pantalla
    return () => {
      console.log('Four Salio');
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

  const goToThreeScreen = () => {
    // Navega a la pantalla Three.js y limpia el historial de navegación
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Uno' }],
    // });
    navigation.navigate('Uno')
  };

  return (
    <View style={screenStyle}>
      <Button
        title="darle pa tras"
        onPress={() => navigation.navigate('Three')}
      />
      <Text>Bienvenidos</Text>
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
          title="Ir a Otra Pantalla"
          onPress={goToThreeScreen}
        />
      )}
    </View>
  );
}

export default Four;
