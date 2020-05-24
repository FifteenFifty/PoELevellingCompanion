import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';

import genericNavigator from './genericStack';

const Drawer = createDrawerNavigator();

export default function drawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Levelling">
        <Drawer.Screen name="Levelling"
                       component={genericNavigator}/>
        <Drawer.Screen name="Passives"
                       component={genericNavigator}/>
        <Drawer.Screen name="Trials"
                       component={genericNavigator}/>
        <Drawer.Screen name="About"
                       component={genericNavigator}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
