import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const ButtonCustom = ({ onPress, title }) => {
        return (
          <TouchableOpacity 
            onPress={onPress} 
            style={styles.button}>
            <Text 
                style={styles.text}>
                {title}
            </Text>
          </TouchableOpacity>
        );
      }
      
      const styles = StyleSheet.create({
        button: {
            justifyConstent: 'flex-end',
          backgroundColor: '#FF1744',
          padding: 20,
          width: 300,
          borderRadius: 10,
        },
        text: {
          fontSize:25,
          color: 'white',
          textAlign: 'center',
        },
      });

export default ButtonCustom;
