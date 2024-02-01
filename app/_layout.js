import { StyleSheet} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen 
            name="index" 
            options={{
                title: 'Login',
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