import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './styles';

import { Amplify } from 'aws-amplify';
import { withAuthenticator} from 'aws-amplify-react-native';
import config from './src/aws-exports';

import { FeedScreenWrapper } from './Screens/FeedScreen';
import { ProfileStack } from './Screens/ProfilesScreen';
import { ChatScreen } from './Screens/ChatScreen';
import { SettingsScreen } from './Screens/SettingsScreen';

Amplify.configure(config);

const Tab = createBottomTabNavigator();

const App = () => {

  return (

    <NavigationContainer>

      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Feed') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
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
        <Tab.Screen name="Chat" component={ChatScreen} options={{headerShown: false}} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: true}} />
        
      </Tab.Navigator>

    </NavigationContainer>
  )};

export default withAuthenticator(App);
