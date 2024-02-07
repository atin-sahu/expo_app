import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const page2 = () => {
  const router = useRouter()
  return (
    <View>
      <Text>page2 page</Text>
      <Button onPress={()=>router.push('(tabs)')} title="go to tab one" />
    </View>
  )
}

export default page2

const styles = StyleSheet.create({})