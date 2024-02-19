import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const page = () => {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:"skyblue"}}>
      <Text>package selection screen page</Text>
      <Link href="/payment" asChild>
        <Button title="select package and proceed to payment" />
      </Link>
    </View>
  )
}

export default page

const styles = StyleSheet.create({})