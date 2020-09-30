import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useMountHook } from 'utils'

export const Tab2 = () => {
  useMountHook('Second Tab')

  return (
    <View style={styles.container}>
      <Text style={styles.info}>Second tab</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  info: { fontSize: 20 }
})
