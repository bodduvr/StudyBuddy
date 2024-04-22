import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default function HomeScreen1({}) { 
    
  
    return ( 
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          This is Yuktha's Home Screen !
        </Text>
        <Image
      source={{
        uri: 'https://1000logos.net/wp-content/uploads/2021/12/Cincinnati-Bearcats-Logo.jpg'
      }}
      style={{width: 200, height: 200, alignSelf: 'center'}}
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