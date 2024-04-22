// SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    // Placeholder signup logic
    if (username && password) {
      // Implement actual signup logic here
      navigation.navigate('Login');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    // <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text>Signup</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Button title="Signup" onPress={handleSignup} />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default SignupScreen;
