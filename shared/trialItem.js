import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { globalStyles } from "../styles/global.js";

export default function TrialItem({item, progress, pressHandler}) {
  var trial = item.rewards.trial;

  var objectiveStyle = [globalStyles.required];
  if ( item.id in progress ) {
    objectiveStyle.push(globalStyles.complete)
  }

  var objectiveLine = [
    <Text style={objectiveStyle.concat(globalStyles.trial)}>Trial: {trial.name}</Text>,
    <Text style={objectiveStyle}>WP: {trial.wp}</Text>
  ];

  if (trial.text) {
    objectiveLine.push(<Text style={objectiveStyle}>{trial.text}</Text>);
  }

  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <View style={globalStyles.item}>
        <View>
          { objectiveLine }
        </View>
      </View>
    </TouchableOpacity>
  )
}
