import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { globalStyles } from "../styles/global.js";
import FormattedText from "../shared/formattedText.js";

export default function PassiveItem({item, progress, pressHandler}) {
  var passive = item.rewards.passive;
  console.log("I am: " + item.id);
  console.log("Progress is: ");
  console.log(progress);

  var objectiveStyle = [globalStyles.required];
  if ( item.id in progress ) {
    console.log("IM DONE");
    objectiveStyle.push(globalStyles.complete)
  }

  var objectiveLine = [
    <FormattedText style={objectiveStyle}
                   taskId={item.id}>
      Quest: {passive.quest}
    </FormattedText>,
    <FormattedText style={objectiveStyle}
                   taskId={item.id}>
      WP: {passive.wp}
    </FormattedText>
  ];

  if (passive.text) {
    objectiveLine.push(
      <FormattedText style={objectiveStyle}
                     taskId={item.id}>
        {passive.text}
      </FormattedText>);
  }

  var key = item.id;

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
