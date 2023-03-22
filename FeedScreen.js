import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify';
import {User} from '../src/models';

// import users from './users';

const Tab = createMaterialTopTabNavigator();

const Card = ({users, userIndex, onSwipeLeft, onSwipeRight }) => {

  const userData = users[userIndex];

  if (!userData) {
    return null;  
  }

  const { name, image, imagetwo, imagethree, bio } = userData;

  return (

    <View style={styles.card}>
      <ScrollView contentContainerStyle={styles.cardInner}>
        <ImageBackground
          source={{
            uri: image,
          }}
          style={styles.image}
        >
          <View style={styles.animatedCard}>
            <Text style={styles.feedname}>{name}</Text>
          </View>
        </ImageBackground>
        <View style={styles.cardInnerbio}>
          <Text style={styles.feedbio}>{bio}</Text>
        </View>
        <ImageBackground
          source={{
            uri: imagetwo,
          }}
          style={styles.imagetwo}
        ></ImageBackground> 
        <ImageBackground
          source={{
            uri: imagethree,
          }}
          style={styles.imagethree}
        ></ImageBackground>
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => onSwipeLeft(userData)}>
            <FontAwesome name="times" size={32} color="#ff6b6b" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => onSwipeRight(userData)}>
            <FontAwesome name="heart" size={32} color="#4ccc93" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

function FeedScreenWrapper({ navigation }) {

  const[users, setUsers] = useState([]);

  useEffect(() => {
    const fetchedUsers = async () => {
      setUsers(await DataStore.query(User));
    };
    fetchedUsers();
  }, []);

  const [userIndex, setUserIndex] = useState(0);

  const onSwipeLeft = (user) => {
    console.warn('swipe left: ', user.name);
    setUserIndex(userIndex + 1);
  };

  const onSwipeRight = (user) => {
    console.warn('swipe right: ', user.name);
    setUserIndex(userIndex + 1);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {userIndex !== null && userIndex < users.length ? (
          <View>
            <Card
              users={users}
              userIndex={userIndex}
              onSwipeLeft={onSwipeLeft}
              onSwipeRight={onSwipeRight}
            />
          </View>
        ) : (
          <View>
            <Text>Sorry, no more users</Text>
          </View>
        )}
      </View>
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
 
  feedHeader: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    height: 80,
    paddingHorizontal: 16,
    elevation: 0,
    borderBottomWidth: 0,
  },

image: {
      width: '100%',
      height: 400,
      marginTop:-5,
      overflow: 'hidden',
      borderRadius: 10,
      justifyContent: 'flex-end',    
    },

imagetwo: {
    width: '100%',
    height: 300,
    borderRadius:10,
    overflow: 'hidden',
    marginBottom:10,
},
imagethree: {
  width: '100%',
  height: 300,
  borderRadius:10,
  overflow: 'hidden',
  marginBottom:10,
},

cardInner: {
  marginTop:10,
  padding: 10,
  borderRadius:10,
  alignItems: 'center', 
},

cardInnerbio: {
  marginTop:10,
  padding: 10,
  marginBottom:10,
  borderRadius:10,
  width: 330,
  borderColor: 'grey',
  backgroundColor: 'white',
  
},

  card: {
      marginTop:60,
      backgroundColor: 'lightgrey',
      overflow: 'hidden',
      borderRadius:10,
      width: '90%',
      height: '90%',

      shadowColor: '#000',
      shadowOffset: {
        width:0,
        height:5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11, 

      borderColor: '#AFE1AF',
      borderWidth: 4,
      padding:2,

  },

  feedname: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    borderRadius:10,
  },

  feedbio: {
    fontSize: 18,
    color: 'black',
    lineHeight: 25,
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    alignItems: 'center',      
  },

  animatedCard: {
    width: '100%',
    height:'100%',
    justifyContent: 'flex-end',
    padding: 10,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 5,
    left: -85,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '150%',
    overflow: 'hidden',
  },
  buttonWrapper: {
    borderRadius: 50,
    backgroundColor: 'white',
    borderColor: 'white',
    width: 70,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { FeedScreenWrapper };