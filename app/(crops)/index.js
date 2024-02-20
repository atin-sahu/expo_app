import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View style={{gap:10}}>
      <Text>crops home screen</Text>
      <Link href="/add_location" asChild>
        <Button  title="Add crop" />
      </Link>

      <Link 
        href={{
            pathname:'/(crops)/(dashboard)/crop_dashboard',
            params: {
              crop_id: 2,
              crop_name: 'Chilli'
            } 
          }
        }
        asChild
        replace
      >
        <Button  title="complete crop" />
      </Link>

      <Link href="/crop_details" asChild>
        <Button  title="fill start date" />
      </Link>
      <Link href="/payment" asChild>
        <Button  title="payment pendig of crop" />
      </Link>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})