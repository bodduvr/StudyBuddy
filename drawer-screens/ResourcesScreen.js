import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function ResourceScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image source={require('./sg1.jpeg')} style={styles.icon} />
        <Text style={styles.header}>Study Groups</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Image source={require('./sg5.jpeg')} style={styles.icon} />
        <Text style={styles.header}>People</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Find</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Image source={require('./sg6.jpeg')} style={styles.icon} />
        <Text style={styles.header}>Subjects</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Image source={require('./sg7.jpeg')} style={styles.icon} />
        <Text style={styles.header}>Ongoing Subject Groups</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Image source={require('./sg8.jpeg')} style={styles.icon} />
        <Text style={styles.header}>New Groups</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Image source={require('./sg1.jpeg')} style={styles.icon} />
        <Text style={styles.header}>Join a New Session</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Image source={require('./sg7.jpeg')} style={styles.icon} />
        <Text style={styles.header}>Leave Session</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Leave</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Image source={require('./sg5.jpeg')} style={styles.icon} />
        <Text style={styles.header}>Find People</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the left
    paddingHorizontal: 20, // Add horizontal padding for spacing
  },
  section: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Align items vertically
    marginBottom: 10, // Add bottom margin for spacing between sections
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, // Add left margin for spacing between icon and text
  },
  icon: {
    width: 50,
    height: 50,
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 'auto', // Align button to the right
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ResourceScreen;
