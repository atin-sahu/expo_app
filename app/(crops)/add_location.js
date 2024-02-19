import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const add_location = () => {
    
  return (
    <View>
      <Text>add_locattion screen</Text>
      <Link href="/add_location_modal" asChild>
        <Button  title="Add location" />
      </Link>
      <Link href="/add_crop" asChild>
        <Button  title="this is a added location card click to see available crops at the location" />
      </Link>
    </View>
  )
}

export default add_location

const styles = StyleSheet.create({})