import { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, Image, } from 'react-native';

// Styles
import styles from './styles';

// Hooks
import lng from '../LanguageContext';

//image
import imagedilo from '../image/png/imagedilo.png';
import imagedilo2 from '../image/png/imagedilo2.png';

//Components
import ButtonCustom from '../components/ButtonCustom';

export const AdquirirTarjetaFisica = () => {

  const [isSelected, setIsSelected] = useState(false);

  const handleImageClick = () => {
    setIsSelected(!isSelected);
  };

  const handleButtonClick = () => {
    Alert.alert('Se presionó', 'Mensaje de la alerta', [
      { text: 'OK' }
    ]);
  };

  return (
    <>
      <View
        style={styles.backgroundColor}>
        <Text
          style={styles.TituloRojo}
        >{lng.TituloRojo}
        </Text>
        <Text
          style={styles.ParrafoOpaco}
        >{lng.ParrafoOpaco}
        </Text>
        <Text
          style={styles.ParrafoOpaco}
        >{lng.ParrafoOpaco2}
        </Text>

        {/* //Select*/}
        <Text
          style={styles.select}
        >{lng.Select}
        </Text>
        <Text
          style={styles.ParrafoOpaco}
        > {lng.ParrafoOpaco3}
        </Text>

        {/* //Debe de ser un icono con titulo debajo */}
        <View style={styles.MargenSelect}>
          <TouchableOpacity
            onPress={handleImageClick}>
            <Image
              source={isSelected ? imagedilo : imagedilo2}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={styles.containerButton}>
        <ButtonCustom
          onPress={handleButtonClick}
          title={lng.BotonContinuar}
          justifyContent='space-between'>
        </ButtonCustom>
      </View>
    </>
  )
}

export default AdquirirTarjetaFisica;
