import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { globalStyles } from "../styles/global.js";


export default function Levelling() {
  return (
    <View style={globalStyles.header}>
      <View>
        <Text style={globalStyles.titleText}>PoE Levelling Companion</Text>
      </View>
    </View>
  );
}
