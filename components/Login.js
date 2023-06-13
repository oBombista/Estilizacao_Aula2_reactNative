import React, { useState } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import CustomButton from './button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
    // Aqui você pode adicionar sua lógica de autenticação
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/onp.png')}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
        <CustomButton 
        onPress={handleLogin}
        />

    </View>
  );
};

export default Login;