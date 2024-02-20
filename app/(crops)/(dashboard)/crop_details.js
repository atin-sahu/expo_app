import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Text> crop details for start date Page</Text>
      <Link href="/(crops)/(dashboard)/crop_dashboard" asChild>
        <Button  title="save & next" />
      </Link>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})