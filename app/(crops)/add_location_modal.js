import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Text> add location modal Page here you will see select option to addd new location</Text>
      <Link href="/add_location" asChild>
        <Button  title="Save Location" />
      </Link>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})