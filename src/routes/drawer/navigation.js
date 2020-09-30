import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DRAWER_ROUTES } from './routes'
import { DrawerPage1, DrawerPage2, DrawerPage3 } from 'pages'

const Drawer = createDrawerNavigator()

export const DrawerNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen name={DRAWER_ROUTES.FIRST} component={DrawerPage1} />
    <Drawer.Screen name={DRAWER_ROUTES.SECOND} component={DrawerPage2} />
    <Drawer.Screen name={DRAWER_ROUTES.THIRD} component={DrawerPage3} />
  </Drawer.Navigator>
)
