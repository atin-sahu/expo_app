import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const page1 = () => {
  const router = useRouter()
  return (
    <View>
      <Text>page1 page</Text>
      <Button onPress={()=>router.push('page2')} title="go to Page two" />
    </View>
  )
}

export default page1

const styles = StyleSheet.create({})