import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { styles } from './styles';

import { FeedScreenWrapper } from './Screens/FeedScreen';
// import { ProfileStack } from './Screens/ProfilesScreen';
import { EditScreen } from './Screens/ProfileEditScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Tabt = createMaterialTopTabNavigator();

function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
    </View>
  );
}

function PreviewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Preview Screen</Text>
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
const App = () => {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Feed') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: styles.tabBarText,
          tabBarStyle: styles.tabBar,
        })}
      >
        <Tab.Screen name="Profile" component={ProfileStack} options={{headerShown: false}}/>
        <Tab.Screen name="Feed" component={FeedScreenWrapper} options={{headerShown: false}} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        
      </Tab.Navigator>

    </NavigationContainer>
  );
};

export default App;
