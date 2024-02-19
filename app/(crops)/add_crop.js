import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Text>all available crops will appear here</Text>
      <Link href="/add_partner" asChild>
        <Button title="this is a crop card click to see available partner of the crop's" />
      </Link>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})