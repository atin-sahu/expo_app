import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from "expo-router";

const partner_splash = () => {

    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // alert("navigate")
            router.push("/crop_profile");
        }, 2000);
      }, []);

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:"blue"}}>
      <Text>partner_splash</Text>
    </View>
  )
}

export default partner_splash

const styles = StyleSheet.create({})