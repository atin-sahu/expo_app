import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Text>add partner page Page</Text>
      <Link href="/partner_splash" asChild>
        <Button title="this is a partner card click to see splash screen" />
      </Link>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})