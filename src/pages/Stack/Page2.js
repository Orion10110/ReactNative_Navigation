import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useMountHook } from 'utils'
import { Button } from 'components'
import { MAIN_ROUTES } from 'routes'

export const Page2 = ({ navigation }) => {
  useMountHook('Page 2')

  // const state = useNavigationState((state) => state)
  // console.log(state)

  // useFocusEffect(
  //   useCallback(() => {
  //     // Do something when the screen is focused
  //     console.log('Page 2 focused')
  //     return () => {
  //       // Do something when the screen is unfocused
  //       // Useful for cleanup functions
  //       console.log('Page 2 blur')
  //     }
  //   }, [])
  // )

  return (
    <View style={styles.container}>
      <Text style={styles.info}>Page 2</Text>
      <Button
        title="Page 3"
        onPress={() => navigation.navigate(MAIN_ROUTES.THIRD_PAGE)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  info: { fontSize: 20 }
})
