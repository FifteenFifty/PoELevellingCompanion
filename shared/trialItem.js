import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { globalStyles } from "../styles/global.js";
import FormattedText from "../shared/formattedText.js";

export default function TrialItem({item, progress, pressHandler}) {
  var trial = item.rewards.trial;

  var objectiveStyle = [globalStyles.required];
  if ( item.id in progress ) {
    objectiveStyle.push(globalStyles.complete)
  }

  var objectiveLine = [
    <FormattedText style={objectiveStyle}
                   taskId={item.id}>
      Trial: {trial.name}
    </FormattedText>,
  ];

  if (trial.wp) {
    objectiveLine.push(
      <FormattedText style={objectiveStyle}
                   taskId={item.id}>
        WP: {trial.wp}
      </FormattedText>
    );
  }

  if (trial.text) {
    if (Array.isArray(trial.text)) {
      trial.text.forEach(function (value, index) {
        var o = (<FormattedText taskId={trial.id}
                                style={objectiveStyle}>
                   {value}
                 </FormattedText>);
        objectiveLine.push(o);
      });
    } else {
      objectiveLine.push(
        <FormattedText style={objectiveStyle}
                       taskId={item.id}>
          {trial.text}
        </FormattedText>);
    }
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
