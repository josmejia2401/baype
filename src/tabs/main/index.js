import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from '../../navigations/main/home';
import PostStack from '../../navigations/main/post';

const Tab = createBottomTabNavigator();

const MainTab = props => (
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
        //component={HomeStack}  
        children={()=><HomeStack {...props}/>}
        options={{ 
          title: 'Home' ,
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
          component={PostStack}  
          options={{ 
            title: 'Post' ,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
);

export default MainTab;