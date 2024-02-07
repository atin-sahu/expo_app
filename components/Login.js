import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router, useRouter } from 'expo-router'

const Login = () => {
  const router = useRouter()
  return (
    <View style={{gap:10}}>

      <Button onPress={()=>router.push('register')} title="go to register" />

      <Link href="/register" asChild>
        <Button  title="go to register as link" />
      </Link>

      <Button onPress={()=>router.push('/(tabs)')} title="go to tab one" />

      <Link href="/(tabs)" asChild>
        <Button  title="go to tab one as link" />
      </Link>

      <Link href="/(tabs)/(deep)/deep" asChild>
        <Button  title="go to deep as link" />
      </Link>

      <Link href="/modal" asChild>
        <Button  title="open modal" />
      </Link>

      <Link href="/(tabs)/(drawertabs)/drawer1" asChild>
        <Button  title="open drawer" />
      </Link>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({})