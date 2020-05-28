import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

export default class App extends Component {
  // const App: () => React$Node = () => {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum sit dolor </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum sit dolor </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum sit dolor </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum sit dolor </Text>
        </View>
      </ScrollView>
    );
  }
}

// everything is (display = flex) by default
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 3,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postDescription: {
    color: '#666',
  },
});
