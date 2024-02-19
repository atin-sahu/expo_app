import { StyleSheet } from 'react-native'
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
            <Stack.Screen
                name="register"
                options={{
                    title: 'REGISTER',
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
                name="page1"
                options={{
                    title: 'PAGE-1',
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
                name="page2"
                options={{
                    title: 'PAGE-2',
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
                name="(tabs)"
                options={{
                    title: 'TABS',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="modal"
                options={{
                    presentation: 'modal',
                }}
            />

            <Stack.Screen
                name="(crops)"
                options={{
                    // title: 'TABS',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerShown: false
                }}
            />

        </Stack>
    )
}

export default _layout

const styles = StyleSheet.create({})