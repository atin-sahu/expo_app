import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Text>payment Page</Text>
      <Link href="/index" asChild>
        <Button title=" payment success" />
      </Link>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})