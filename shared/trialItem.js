import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { globalStyles } from "../styles/global.js";

export default function TrialItem({item, index, pressHandler}) {
  item = item.rewards.trial;

  var objectiveStyle = [globalStyles.required];
  if ( item.complete ) {
    objectiveStyle.push(globalStyles.complete)
  }

  var objectiveLine = [
    <Text style={globalStyles.trial}>Trial: {item.name}</Text>,
    <Text style={globalStyles.waypoint}>WP: {item.wp}</Text>
  ];

  if (item.text) {
    objectiveLine.push(<Text style={globalStyles.objective}>{item.text}</Text>);
  }

  var key = item.id;

  return (
    <TouchableOpacity onPress={() => pressHandler(index, item.id)}>
      <View style={globalStyles.item}>
        <View>
          { objectiveLine }
        </View>
      </View>
    </TouchableOpacity>
  )
}
