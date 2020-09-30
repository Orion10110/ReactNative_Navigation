import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useMountHook } from 'utils'

export const DrawerPage3 = () => {
  useMountHook('Third Drawer Page')
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Third Drawer Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  info: { fontSize: 20 }
})
