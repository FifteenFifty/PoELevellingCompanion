import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { globalStyles } from "../styles/global.js";


export default function About() {
  return (
    <View style={globalStyles.header}>
      <View>
        <Text style={globalStyles.headerText}>This is the about page</Text>
      </View>
    </View>
  );
}
