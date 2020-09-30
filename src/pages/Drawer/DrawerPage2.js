import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useMountHook } from 'utils'

export const DrawerPage2 = () => {
  useMountHook('Second Drawer Page')
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Second Drawer Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  info: { fontSize: 20 }
})
