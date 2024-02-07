import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="drawer1"
        options={{
          //style for header
          headerTitle: 'My Profile',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          //style for drawer
          drawerLabel: 'Profile',
          drawerIcon: ({ size, color }) => {
            return <Ionicons name="person" size={size} color={color} />
          },
          drawerActiveBackgroundColor: 'green',
          drawerActiveTintColor: 'white',          
        }}
      />
      <Drawer.Screen
        name="drawer2"
        options={{          
          drawerLabel: 'Home',
          headerTitle: 'My home',
          drawerIcon: ({ size, color }) => {
            return <Ionicons name="home" size={size} color={color} />
          },
          drawerItemStyle: { marginTop:30}
        }}
      />
    </Drawer>
  )
}

export default _layout

const styles = StyleSheet.create({})