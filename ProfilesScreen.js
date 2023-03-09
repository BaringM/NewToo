import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { EditScreen } from './ProfileEditScreen';
import { styles } from '../styles';
import { Card } from './FeedScreen';

const Stack = createStackNavigator();

function PreviewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Preview Screen</Text>
      {/* <View style={styles.nextCardContainer}>
          <Card users={users} userIndex={userIndex} />
        </View> */}
    </View>
  );
}

function ProfileStack() { 
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Preview"
        component={PreviewScreen}
        options={({ navigation }) => ({
          title: 'Preview',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
              <Text style={styles.headerButton}>Edit</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Edit"
        component={EditScreen}
        options={({ navigation }) => ({
          title: 'Edit',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Preview')}>
              <Text style={styles.headerButton}>Preview</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export { ProfileStack };



