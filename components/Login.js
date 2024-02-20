import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router, useRouter } from 'expo-router'

const Login = () => {
  const router = useRouter()
  return (
    <View style={{gap:10}}>

      <Link href="/(crops)" asChild replace>
        <Button  title="go to crop" />
      </Link>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({})