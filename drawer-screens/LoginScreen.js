import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation(); // Get navigation object

  const handleLogin = () => {
    // Placeholder authentication logic
    if (username === 'admin' && password === 'password') {
      navigation.navigate('Dashboard'); // Navigate to Dashboard screen
    } else {
      setError('Invalid username or password');
    }
  };

  const handleGoogleSignIn = () => {
    // Placeholder Google sign-in logic
    console.log('Signing in with Google');
  };

  const handleFacebookSignIn = () => {
    // Placeholder Facebook sign-in logic
    console.log('Signing in with Facebook');
  };

  const handleTwitterSignIn = () => {
    // Placeholder Twitter sign-in logic
    console.log('Signing in with Twitter');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back!</Text>
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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]} onPress={handleFacebookSignIn}>
        <Text style={styles.socialButtonText}>Login with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#db4437' }]} onPress={handleGoogleSignIn}>
        <Text style={styles.socialButtonText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#00acee' }]} onPress={handleTwitterSignIn}>
        <Text style={styles.socialButtonText}>Login with Twitter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e6e6fa', // Light violet background color
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '50%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  loginButton: {
    width: '50%',
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  socialButton: {
    width: '30%',
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  socialButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
