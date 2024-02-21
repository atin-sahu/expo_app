import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { withLayoutContext } from 'expo-router'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext(Navigator)

const _layout = () => {
  return (
    <MaterialTopTabs>
      <MaterialTopTabs.Screen name="seed" options={{ title: 'Seeds Tab' }} />
      <MaterialTopTabs.Screen name="fertiliser" options={{ title: 'Fertiliser Tab' }} />
      <MaterialTopTabs.Screen name="pesticides" options={{ title: 'Pesticides Tab' }} />
    </MaterialTopTabs>
  )
}

export default _layout

const styles = StyleSheet.create({})