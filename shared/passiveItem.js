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

export default function PassiveItem({item, index, pressHandler}) {
  item = item.rewards.passive;

  var objectiveStyle = [globalStyles.required];
  if ( item.complete ) {
    objectiveStyle.push(globalStyles.complete)
  }

  var objectiveLine = [
    <Text style={globalStyles.objective}>Quest: {item.quest}</Text>,
    <Text style={globalStyles.objective}>WP: {item.wp}</Text>
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
