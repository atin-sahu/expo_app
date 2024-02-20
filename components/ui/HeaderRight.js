import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const HeaderRight = () => {
  // const router = useRouter()
  return (
    <View style={{flexDirection:'row', gap:15}}>
        <Pressable onPress={() => alert('open profile page')}>
            <Ionicons name="person" size={24} color="white" />
        </Pressable>
        <Pressable onPress={() => alert('open notification page')}>
            <Ionicons name="notifications" size={24} color="white" />
        </Pressable>
        {/* <Pressable onPress={() => router.replace("/(crops)")}>
            <Ionicons name="home" size={24} color="white" />
        </Pressable> */}
    </View>
  )
}

export default HeaderRight

const styles = StyleSheet.create({})