import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useMountHook } from 'utils'
import { Button } from 'components'
import { MAIN_ROUTES } from 'routes'

export const Page1 = ({ navigation }) => {
  useMountHook('Page 1')
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Page 1</Text>
      <Button
        title="Page 2"
        onPress={() => navigation.navigate(MAIN_ROUTES.SECOND_PAGE)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  info: { fontSize: 20 }
})
