import React from 'react'
import Home from '../screens/Home/Home.screen'
import Event from '../screens/Event/Event.screen'
import Profile from '../screens/Profile/Profile.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Welcome from '../screens/Welcome/Welcome.screen'

const Stack = createStackNavigator()
// const Tab = createBottomTabNavigator()
const Tab = createMaterialTopTabNavigator()

const EventNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home2" component={Home} />
      <Stack.Screen name="Event" component={Event} />
    </Stack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => null}>
      <Tab.Screen name="Home" component={EventNavigation} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
