import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './styles';

import { FeedScreenWrapper } from './Screens/FeedScreen';
import { ProfileStack } from './Screens/ProfilesScreen';

const Tab = createBottomTabNavigator();

function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
    </View>
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
