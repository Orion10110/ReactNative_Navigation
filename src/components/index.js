import React from 'react'
import { Button as ReactButton, View } from 'react-native'

export const Button = ({ onPress, title }) => (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={{ marginTop: 10 }}>
    <ReactButton onPress={onPress} title={title} />
  </View>
)
