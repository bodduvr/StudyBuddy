import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, FlatList } from 'react-native';

const AboutScreen = ({ navigation }) => {
  const [discussionText, setDiscussionText] = useState('');
  const [listData, setListData] = useState([
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' },
    { id: '4', name: 'Bob Johnson' },
    { id: '5', name: 'Emma Brown' },
  ]);

  const handlePress = () => {
    // Navigate to CreateStudyBuddyGroupScreen when "Create a New Study Buddy Group" is pressed
    navigation.navigate('CreateStudyBuddyGroup');
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <ImageBackground source={require('./math.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to Discussion Group</Text>
        <Text>This is the StudyBuddy app.</Text>

        {/* Discussion Board */}
        <TextInput
          style={styles.input}
          value={discussionText}
          onChangeText={setDiscussionText}
          placeholder="Type your message here..."
          multiline
        />

        {/* List */}
        <FlatList
          data={listData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />

        {/* Sections */}
        <TouchableOpacity style={styles.section} onPress={handlePress}>
          <Text style={styles.sectionHeading}>Create a New Study Buddy Group</Text>
          {/* Add icon image */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Resources')}>
          <Text style={styles.sectionHeading}>Resources</Text>
          {/* Add icon image */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Groups')}>
          <Text style={styles.sectionHeading}>Groups</Text>
          {/* Add icon image */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Find')}>
          <Text style={styles.sectionHeading}>Find</Text>
          {/* Add icon image */}
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the left
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Align items vertically
    marginBottom: 10, // Add bottom margin for spacing between sections
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // Add left margin for spacing between icon and text
    textDecorationLine: 'underline', // Add underline
    color: 'blue', // Change color to tinted blue
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    height: 200, // Increase height
  },
  list: {
    width: '100%',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default AboutScreen;
