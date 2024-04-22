import * as React from 'react';
import { View, StyleSheet,Button, Text } from 'react-native';

export default function HomeScreen({navigation}) { 
  const data = { websiteName: "Bhargavi's website" }

  return ( 
    <View style={styles.container}>
      <Text>Hello Everyone!My New Project </Text>
      <Button 
        title="Navigate to About Page"
        onPress={() => navigation.navigate('AboutScreen', data)} 
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
