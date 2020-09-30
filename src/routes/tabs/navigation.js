import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tab1, Tab2 } from 'pages'
import { TABS_ROUTES } from './routes'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen name={TABS_ROUTES.FIRST_TAB} component={Tab1} />
    <Tab.Screen name={TABS_ROUTES.SECOND_TAB} component={Tab2} />
  </Tab.Navigator>
)
