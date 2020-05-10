import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../styles/global.js";

export default function Header( { navigation, title } ) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={globalStyles.header}>
      <MaterialIcons style={globalStyles.headerMenuIcon}
                     onPress={openMenu}
                     name="menu"/>
      <Text style={globalStyles.headerText}>{title}</Text>
    </View>
  );
}

