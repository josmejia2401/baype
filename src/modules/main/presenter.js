import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MyStack from '../../navigations/main';

import styles from './style';

class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Home',
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const SplashScreen = props => (
  <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          //headerMode: 'none',
        }}
      >
        <Tab.Screen
        name="Home" 
        component={HomeScreen}  
        options={{ 
          title: 'My home' ,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          //tabBarIcon: ({ color, size }) => ( <MaterialCommunityIcons name="bell" color={color} size={size} /> ),
          //tabBarBadge: 3, 
        }}
         />
        <Tab.Screen 
          name="Settings" 
          component={MyStack}  
          options={{ 
            title: 'My home' ,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            //tabBarIcon: ({ color, size }) => ( <MaterialCommunityIcons name="bell" color={color} size={size} /> ),
            //tabBarBadge: 3, 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
);

export default SplashScreen;