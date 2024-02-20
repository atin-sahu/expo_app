import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router' 
import HeaderRight from '../../../components/ui/HeaderRight'

const _layout = () => {
  return (
    <Stack>

        <Stack.Screen   
            name='crop_dashboard'
            options={{
                title: 'Crop Dashbord',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerRight: () => <HeaderRight />
            }}
        />

    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})