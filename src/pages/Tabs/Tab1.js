import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useMountHook } from 'utils'

export const Tab1 = () => {
  useMountHook('First Tab')

  return (
    <View style={styles.container}>
      <Text style={styles.info}>First Tab</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  info: { fontSize: 20 }
})
