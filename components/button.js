import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles';

const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;