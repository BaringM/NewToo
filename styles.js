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
    width: '105%',
    height: '105%',
    borderRadius:10,
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
    marginHorizontal: 20,
    height: 255,
    alignSelf: 'stretch', // evenly space images vertically
  },
      
  imageContainer: {
    borderRadius:10,
    backgroundColor: 'rgba(211, 211, 211, 0.6)',
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
  closeIconContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    zIndex: 1,
  },
  closeIconCircle: {
    backgroundColor: 'white',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 1,
  },
  aboutMeContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 20,
  },
  aboutMeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:5,

  },
  aboutMeInput: {
    height: 100,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'top',
  },
});

const previewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});

export { styles, previewStyles };