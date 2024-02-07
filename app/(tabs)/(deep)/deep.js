import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

const index = () => {
  const router = useRouter()
  return (
    <View style={{gap:10}}>
      
      <Link href={'/details'} asChild>
        <Button title="Go to Details as link"/>
      </Link>
      <Button title="Go to Details" onPress={() => router.push('/details')} />
      <Button title="logout" onPress={() => router.replace('/')} />

      <Link href={`/1`} asChild>
        <Text>user 1</Text>
      </Link>
      <Link href={'/2'} asChild>
        <Text>user 2</Text>
      </Link>
      <Link href={'/3'} asChild>
        <Text>user 3</Text>
      </Link>

    </View>
  )
}

export default index

const styles = StyleSheet.create({})