import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ImageBackground, TouchableOpacity, Image } from 'react-native';

const DonorDashboard = () => {
  const [foodItems, setFoodItems] = useState([
    { id: '1', name: 'Java', Members: 10, images: [require('./j1.jpeg'), require('./j2.jpeg'), require('./j3.jpeg')] },
    { id: '2', name: 'C++', Members: 5, images: [require('./c2.jpeg'), require('./c2.jpeg'), require('./C.jpeg')] },
    { id: '3', name: 'Python', Members: 3, images: [require('./p1.jpeg'), require('./p2.jpeg'), require('./p1.jpeg')] },
  ]);

  const renderFoodItem = ({ item }) => (
    <View style={styles.foodItem}>
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>Members Joined: {item.Members}</Text>
      </View>
      <View style={styles.imagesContainer}>
        {item.images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </View>
      <TouchableOpacity style={styles.joinButton} onPress={() => handleJoin(item.id)}>
        <Text style={styles.joinText}>Join</Text>
      </TouchableOpacity>
    </View>
  );

  const handleJoin = (id) => {
    // Handle join action here
    console.log(`Join action for item with id ${id}`);
  };

  return (
    <ImageBackground source={require('./math.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Dashboard</Text>
        <Button title="Add Subjects" onPress={() => console.log('Add subject Groups')} />
        <FlatList
          data={foodItems}
          renderItem={renderFoodItem}
          keyExtractor={(item) => item.id}
          style={styles.foodList}
        />
        <View style={[styles.section, { backgroundColor: 'rgba(255, 255, 0, 0.2)' }]}>
          <Text style={[styles.sectionTitle, { color: 'green' }]}>Text-Book Links</Text>
        </View>
        <View style={[styles.section, { backgroundColor: 'rgba(255, 255, 0, 0.2)' }]}>
          <Text style={[styles.sectionTitle, { color: 'green' }]}>Professors</Text>
        </View>
        <View style={[styles.section, { backgroundColor: 'rgba(255, 255, 0, 0.2)' }]}>
          <Text style={[styles.sectionTitle, { color: 'green' }]}>Video Lectures</Text>
        </View>
      </View>
    </ImageBackground>
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
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
  },
  foodList: {
    marginBottom: 20,
  },
  foodItem: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black', // Added color to text
  },
  joinButton: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  joinText: {
    color: 'white',
    fontWeight: 'bold',
  },
  section: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  textContainer: {
    flex: 1, // Added flex to text container
  },
});

export default DonorDashboard;
