import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Text>crops home screen</Text>
      <Link href="/add_location" asChild>
        <Button  title="Add crop" />
      </Link>

      <Link href="/crop_details" asChild>
        <Button  title="this is a added crop click to see crop details" />
      </Link>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})