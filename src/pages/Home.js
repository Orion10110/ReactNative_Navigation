import React, { useCallback, useEffect } from 'react'
import { Button } from 'components'
import { View, Text, StyleSheet } from 'react-native'
import { MAIN_ROUTES, TABS_ROOT, DRAWER_ROOT } from 'routes/routes'

export const Home = ({ navigation }) => {
  const onPress = useCallback(
    () => navigation.navigate(MAIN_ROUTES.FIRST_PAGE),
    [navigation]
  )

  const goToTabs = useCallback(() => navigation.navigate(TABS_ROOT), [
    navigation
  ])

  const goToDrawer = useCallback(() => navigation.navigate(DRAWER_ROOT), [
    navigation
  ])

  useEffect(() => {
    console.log('Mount Home Page')
    return () => console.log('Unmount Home Page')
  }, [])

  // useLogNavigationState()

  return (
    <View style={styles.container}>
      <Text style={styles.info}>Home Page</Text>
      <Button title="Stack" onPress={onPress} />
      <Button title="Tabs" onPress={goToTabs} />
      <Button title="Drawer" onPress={goToDrawer} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  info: { fontSize: 20 }
})
