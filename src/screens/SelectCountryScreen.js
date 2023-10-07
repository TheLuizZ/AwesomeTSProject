import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';


const local_data = [
  {
    value: '1',
    lable: 'Honduras',
    image: require('../image/png/Honduras.png'),
  },
  {
    value: '2',
    lable: 'Country 2',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
];

const SelectCountryScreen = _props => {
  const [country, setCountry] = useState('1');

  return (
    <View
      style={styles.backgroundColor}>
      <Text>Hola Mundo</Text>
      <View style={styles.selectCountryContainer}>
        <SelectCountry
          style={styles.dropdown}
          selectedTextStyle={styles.selectedTextStyle}
          placeholderStyle={styles.placeholderStyle}
          imageStyle={styles.imageStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          search
          maxHeight={200}
          value={country}
          data={local_data}
          valueField="value"
          labelField="lable"
          imageField="image"
          placeholder="Select country"
          searchPlaceholder="Buscar..."
          onChange={e => {
            setCountry(e.value);
          }}
        />
      </View>
      <Text>Hola Mundo</Text>
    </View>
  );
};

export default SelectCountryScreen;

const styles = StyleSheet.create({
  selectCountryContainer: {
    alignItems: 'center',
  },
  backgroundColor: {
    flex: 1,
    backgroundColor: 'black',
  },
  dropdown: {
    width: 380,
    height: 60,
    backgroundColor: '#f5f5f5', // Cambia el color de fondo según tus preferencias
    borderRadius: 10, // Ajusta el valor según tus preferencias
    borderColor: '#ccc', // Cambia el color del borde según tus preferencias
    borderWidth: 1, // Ajusta el grosor del borde según tus preferencias
    margin: 16,
  },
  imageStyle: {
    marginLeft: 20,
    width: 48,
    height: 24,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    color: 'black',
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});