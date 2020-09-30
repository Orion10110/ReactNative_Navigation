import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useMountHook } from 'utils'
// eslint-disable-next-line no-unused-vars
import { useLogNavigationState } from 'utils'

export const DrawerPage1 = ({ navigation }) => {
  useMountHook('First Drawer Page')
  // useLogNavigationState()
  return (
    <View style={styles.container}>
      <Text style={styles.info}>First Drawer Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  info: { fontSize: 20 }
})
