import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default function DetailScreen1({}) { 
    
  
    return ( 
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          This is my Detail Screen !
        </Text>
        <Image
      source={{
        uri: 'https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/gobearcats.com/images/2024/1/30/Web-Rotator_450x450-fix.jpg'
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