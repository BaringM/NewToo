import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { styles } from '../styles';

const Tab = createMaterialTopTabNavigator();

function FeedScreenWrapper({ navigation }) {
  return (
    
    <View style={{ flex: 1 }}>
      {/* <Tab.Navigator>
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Filters" component={FiltersScreen} />
      </Tab.Navigator>  */}
       <View style={styles.feedHeader}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity> */}
        <Text style={styles.headerText}>Feed</Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
          <Ionicons name="options-outline" size={24} color="white" />
        </TouchableOpacity>  */}
       </View>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

function FiltersScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Filters Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
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
});

export { FeedScreenWrapper };