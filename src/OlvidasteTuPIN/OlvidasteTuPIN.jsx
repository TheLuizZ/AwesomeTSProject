import React from 'react';
import { Text, View, Image, Alert } from 'react-native';
import styles from './styles';

// Hooks
import lng from '../LanguageContext';

//image
import imagedilo from '../image/png/imagedilo.png';

//Components
import ButtonCustom from '../components/ButtonCustom';
import AdquirirTarjetaFisica from '../AdquirirTarjetaFisica/AdquirirTarjetaFisica';

export const OlvidasteTuPIN = () => {

  const handleButtonClick = () => {
    <AdquirirTarjetaFisica/>
  };
  // const handleButtonClick = () => {
  //   Alert.alert('Se presionó', 'Mensaje de la alerta', [
  //     { text: 'OK' }
  //   ]);
  // };

  return (
    <>
      <View style={styles.container}>
        <Image
          source={imagedilo}
          style={styles.image}
        />
        <Text
          style={styles.textTitle}
        >{lng.Titulo}
        </Text>
        <Text
          style={styles.text}
        >{lng.Parrafo}
        </Text>
      </View>

      <View
        style={styles.containerButton}>
        <ButtonCustom
          onPress={handleButtonClick}
          title={lng.Boton}
          justifyContent='space-between'>
        </ButtonCustom>
      </View>
    </>
  )
}

export default OlvidasteTuPIN;