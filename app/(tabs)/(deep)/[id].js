import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Single = () => {
    const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>user : {id} </Text>
    </View>
  )
}

export default Single

const styles = StyleSheet.create({})