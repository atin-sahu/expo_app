import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>

      <Stack.Screen
        name="deep"
        options={{
          title: 'Deep screen',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
      />

      <Stack.Screen
        name="details"
        options={{
          title: 'Details screen',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: 'Single screen',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
      />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})