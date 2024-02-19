import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HeaderRight from '../../components/ui/HeaderRight'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen
            name='index'
            options={{
                title: 'Home',
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
        <Stack.Screen
            name='add_location'
            options={{
                title: 'My Location',
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
        <Stack.Screen
            name='add_location_modal'
            options={{
                title: 'Add Location',
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
        <Stack.Screen
            name='add_crop'
            options={{
                title: 'Available Crops',
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
        <Stack.Screen
            name='add_partner'
            options={{
                title: 'Available Partners',
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
        <Stack.Screen
            name='partner_splash'
            options={{
                headerShown: false
            }}
        />

        <Stack.Screen
            name='crop_profile'
            options={{
                title: 'Crop Profile',
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

        <Stack.Screen
            name='payment'
            options={{
                title: 'Payment',
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

        <Stack.Screen
            name='crop_details'
            options={{
                title: 'Crop Details',
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