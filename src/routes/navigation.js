import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
import { Home } from 'pages'
import { Page1, Page2, Page3, Page4 } from 'pages/Stack'

import { MAIN_ROUTES } from './routes'
import { TabNavigation, TABS_ROOT } from './tabs'
import { DrawerNavigation, DRAWER_ROOT } from './drawer'

export const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={MAIN_ROUTES.HOME} component={Home} />
    <Stack.Screen name={MAIN_ROUTES.FIRST_PAGE} component={Page1} />
    <Stack.Screen name={MAIN_ROUTES.SECOND_PAGE} component={Page2} />
    <Stack.Screen name={MAIN_ROUTES.THIRD_PAGE} component={Page3} />
    <Stack.Screen name={MAIN_ROUTES.FOURTH_PAGE} component={Page4} />
    <Stack.Screen name={TABS_ROOT} component={TabNavigation} />
    <Stack.Screen name={DRAWER_ROOT} component={DrawerNavigation} />
  </Stack.Navigator>
)
