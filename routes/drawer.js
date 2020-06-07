import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

import genericNavigator from './genericStack';

import {Theme, Colours, globalStyles} from "../styles/global.js";

const Drawer = createDrawerNavigator();

const startPage = "Levelling"

export default function drawerNavigator() {
  return (
    <NavigationContainer theme={Colours[Theme]}>
      <Drawer.Navigator initialRouteName={startPage}>
        <Drawer.Screen name="Levelling"
                       component={genericNavigator}/>
        <Drawer.Screen name="Passives"
                       component={genericNavigator}/>
        <Drawer.Screen name="Trials"
                       component={genericNavigator}/>
        <Drawer.Screen name="Settings"
                       component={genericNavigator}/>
        <Drawer.Screen name="About"
                       component={genericNavigator}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
