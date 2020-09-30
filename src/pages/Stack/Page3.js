import { Button } from 'components'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MAIN_ROUTES } from 'routes'

export class Page3 extends React.Component {
  constructor(props) {
    super(props)

    // this.focus = this.focus.bind(this)
    // this.blur = this.blur.bind(this)
    // this.unsubscribeFocus = navigation.addListener('focus', this.focus)
    // this.unsubscribeBlur = navigation.addListener('blur', this.blur)
  }

  componentDidMount = () => {
    console.log('Page didMount 3')
  }

  focus() {
    console.log('Page 3 focused')
  }

  blur() {
    console.log('Page 3 blur')
  }

  componentWillUnmount = () => {
    console.log('Page 3 unmount')
    // this.unsubscribeFocus()
    // this.unsubscribeBlur()
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.info}>Page 3</Text>
        <Button
          title="Page 1"
          onPress={() => navigation.navigate(MAIN_ROUTES.FIRST_PAGE)}
        />
        <Button
          title="Page 2"
          onPress={() => navigation.navigate(MAIN_ROUTES.SECOND_PAGE)}
        />
        <Button
          title="Page 3"
          onPress={() => navigation.navigate(MAIN_ROUTES.THIRD_PAGE)}
        />
        <Button
          title="Page 4"
          onPress={() => navigation.navigate(MAIN_ROUTES.FOURTH_PAGE)}
        />
        <Button
          title="PUSH Page 3"
          onPress={() => navigation.push(MAIN_ROUTES.THIRD_PAGE)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  info: { fontSize: 20 }
})
