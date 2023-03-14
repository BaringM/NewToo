import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import users from './users';

function ChatScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize:24 }} >
          New Matches
        </Text> 
        <ScrollView horizontal={true}>
          <View style={styles.users }>
            {users.map(user => (
              <View style={styles.user} key={user.id}>
                <Image source={{uri: user.image}} style={styles.image}/>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    padding:10,
    marginTop:30,
  },
  container: {
    padding:10,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'scroll',
  },
  user: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 50,

    borderWidth: 2,
    padding:2,
    borderColor: 'green',
  },
  image: {
    width:'100%',
    height: '100%',
    borderRadius: 50,
  },
});




export { ChatScreen };

