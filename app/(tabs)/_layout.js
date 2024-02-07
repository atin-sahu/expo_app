import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Index Tab',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="add" size={size} color={color} />
          },
          tabBarStyle: { backgroundColor: 'silver' },
          tabBarActiveBackgroundColor: 'green',
          tabBarActiveTintColor: 'white',
        }}
      />

      <Tabs.Screen
        name="three"
        options={{
          tabBarLabel: 'Third Tab',
          tabBarIcon: () => {
            return <Ionicons name="airplane" size={24} color="lightgreen" />
          },
          tabBarStyle: { backgroundColor: 'silver' },
          tabBarActiveBackgroundColor: 'green',
          tabBarActiveTintColor: 'white',
        }}
      />

      <Tabs.Screen
        name="(deep)"
        options={{
          tabBarLabel: 'Deep Tab',
          tabBarIcon: () => {
            return <Ionicons name="home" size={24} color="lightgreen" />
          },
          tabBarStyle: { backgroundColor: 'silver' },
          tabBarActiveBackgroundColor: 'green',
          tabBarActiveTintColor: 'white',
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="(drawertabs)"
        options={{
          tabBarLabel: 'Drawer Tab',
          tabBarIcon: ({size,color}) => {
            return <Ionicons name="menu" size={24} color="lightgreen" />
          },
          tabBarStyle: { backgroundColor: 'silver' },
          tabBarActiveBackgroundColor: 'green',
          tabBarActiveTintColor: 'white',
          headerShown: false,
        }}
      />

    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})