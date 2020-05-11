import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { globalStyles } from "../styles/global.js";

/**
 * Parses a fragment of an objective, replacing:
 *
 * - *Boss* with boss-styled text
 * - _Area_ with area-styled text
 * - =Quest= with quest-styled text
 * - #Trial# with trial-styled text
 */
function parseObjectiveFragment(taskId, fragment, defaultStyle, index) {
  var fragments   = [];
  var splitString = [];
  var type        = "";
  if (fragment.includes("*")) {
    splitString = fragment.split("*");
    type = "boss";
  } else if (fragment.includes("_")) {
    splitString = fragment.split("_");
    type = "area";
  } else if (fragment.includes("=")) {
    splitString = fragment.split("=");
    type = "quest";
  } else if (fragment.includes("#")) {
    splitString = fragment.split("#");
    type = "trial";
  }

  if (typeof index === "undefined") {
    index = 0;
  }

  var uniqueKey = taskId + "Text" + index.toString();
  index++;

  if (type !== "") {
    splitString.forEach(function (value, idx) {
      if (idx % 2 == 0) {
        fragments = fragments.concat(parseObjectiveFragment(taskId,
                                                            value,
                                                            defaultStyle,
                                                            ++index));
      } else {
        var newStyle = defaultStyle.concat([globalStyles[type]]);
        uniqueKey += idx.toString();
        fragments.push(<Text key={ uniqueKey }
                             style={ newStyle }>{value}</Text>);
      }
    });
  } else {
    fragments.push(<Text key={ uniqueKey }
                         style={ defaultStyle }>{fragment}</Text>);
  }

  return fragments;
}

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
    <Text style={objectiveStyle}>Quest: {passive.quest}</Text>,
    <Text style={objectiveStyle}>WP: {passive.wp}</Text>
  ];

  if (passive.text) {
    objectiveLine.push(<Text style={objectiveStyle}>{passive.text}</Text>);
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
