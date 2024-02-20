import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link, useLocalSearchParams, useRouter} from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const Page = () => {

  const params = useLocalSearchParams()
  const router = useRouter()
  console.log('params', params)

  return (
    <View style={{flex:1, justifyContent:'space-between'}}>
      <View>
        <Text>crop_dashboard </Text>
        {/* <Text>crop id : {crop_id} </Text>
        <Text>crop name : {crop_name} </Text> */}

        {/* all tabs */}
        <View style={{gap:10, marginTop:20}}>
          <Text>information</Text>
          <View style={{gap:10}}>
            <Link href="/" >
              <Ionicons name="person-add" size={20} color="black"><Text>advisory</Text> </Ionicons>
            </Link>
            <Link href="/" >
              <Ionicons name="add" size={20} color="black"><Text>crop helath</Text> </Ionicons>
            </Link>
            <Link href="/" >
              <Ionicons name="add" size={20} color="black"><Text>ask expert</Text> </Ionicons>
            </Link>
            <Link href="/" >
              <Ionicons name="add" size={20} color="black"><Text>expert reply</Text> </Ionicons>
            </Link>
            <Link href="/" >
              <Ionicons name="add" size={20} color="black"><Text>live queries</Text> </Ionicons>
            </Link>
          </View>
          <Text>purchase</Text>
          <View style={{gap:10}}>
          <Link href="/" >
              <Ionicons name="add" size={20} color="black"><Text>Seeds </Text> </Ionicons>
            </Link>
            <Link href="/" >
              <Ionicons name="add" size={20} color="black"><Text>Fertilizer</Text> </Ionicons>
            </Link>
            <Link href="/" >
              <Ionicons name="add" size={20} color="black"><Text>Pesticide</Text> </Ionicons>
            </Link>
            <Link href="/" >
              <Ionicons name="add" size={20} color="black"><Text>receivd</Text> </Ionicons>
            </Link>
            <Link href="/" >
              <Ionicons name="add" size={20} color="black"><Text>pending inputs</Text> </Ionicons>
            </Link>
            <Link href="/" >
              <Ionicons name="add" size={20} color="black"><Text>declined inputs</Text> </Ionicons>
            </Link>
          </View>
        </View>

      </View>

      <View style={{backgroundColor:'lightgreen', alignItems:'center', justifyContent:'space-around', height:50, flexDirection:'row'}}>
        <Ionicons name="apps" size={24} color="black" />
        <Pressable onPress={() => router.replace("/(crops)")}>
          <Ionicons name="home" size={24} color="black" />
        </Pressable>
        <Ionicons name="options" size={24} color="black" />
      </View>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})