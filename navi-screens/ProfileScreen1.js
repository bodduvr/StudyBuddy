import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default function ProfileScreen1({}) { 
    
  
    return ( 
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          This is my Profile Screen !
        </Text>
        <Image
      source={{
        uri: 'https://asset.brandfetch.io/id1lf2uZXK/idJkpl1nR_.jpeg'
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