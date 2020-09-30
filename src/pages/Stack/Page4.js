import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useMountHook } from 'utils'

export const Page4 = ({ navigation }) => {
  useMountHook('Page 4')
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Page 4</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  info: { fontSize: 20 }
})
