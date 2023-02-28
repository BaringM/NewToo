import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'tomato',
    height: 80,
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButton: {
    padding: 8,
    marginRight:20,
  },
  headerButtonText: {
    fontSize: 16,
    color: '#555',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tabBarText: {
    fontSize: 10,
    color: '#666',
  },
  image: {
    width: 105,
    height: 105,
    // borderRadius:10,
  },
  imageBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    height: 255,
    alignSelf: 'stretch', // evenly space images vertically
  },
      
  imageContainer: {
    width: '30%',
    aspectRatio: 1,
    margin: 5,
    borderWidth: 3,
    borderColor: 'grey',
    alignItems: 'center',
    borderStyle: 'dashed',
    justifyContent: 'center',
    height: 60,
    alignSelf: 'auto', // allow container to take up vertical space
  },
  profileEditcontainer: {
    marginLeft:20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export { styles };