import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const register = () => {
  const router = useRouter()
  return (
    <View>
      <Text>register page</Text>
      <Button onPress={()=>router.push('page1')} title="go to Page one" />
    </View>
  )
}

export default register

const styles = StyleSheet.create({})