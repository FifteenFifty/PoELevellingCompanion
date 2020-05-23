import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { globalStyles } from "../styles/global.js";

/**
 * Parses a fragment of an objective, replacing:
 *
 * - *Boss*  with boss-styled text
 * - _Area_  with area-styled text
 * - #Quest# with quest-styled text
 * - =Trial= with trial-styled text
 * - /WP/    with WP-styled text
 */
function parseTextFragment(taskId, fragment, defaultStyle, index) {
  fragment += "";

  var fragments   = [];
  var splitString = [];
  var type        = "";
  if (fragment.includes("*")) {
    splitString = fragment.split("*");
    type = "boss";
  } else if (fragment.includes("_")) {
    splitString = fragment.split("_");
    type = "area";
  } else if (fragment.includes("#")) {
    splitString = fragment.split("#");
    type = "quest";
  } else if (fragment.includes("=")) {
    splitString = fragment.split("=");
    type = "trial";
  } else if (fragment.includes("/")) {
    splitString = fragment.split("/");
    type = "waypoint";
  }

  if (typeof index === "undefined") {
    index = {"i": 0};
  }

  var uniqueKey = taskId + "Text" + type + index.i;

  if (type !== "") {
    splitString.forEach(function (value, idx) {
      index.i++;
      if (idx % 2 == 0) {
        fragments = fragments.concat(parseTextFragment(taskId,
                                                       value,
                                                       defaultStyle,
                                                       index));
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

export default class FormattedText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var text = "";

    if (Array.isArray(this.props.children)) {
      text = this.props.children.join("");
    } else {
      text = this.props.children;
    }

    return (
      <Text key={ this.props.taskId }>
        { parseTextFragment(this.props.taskId,
                            text,
                            this.props.style) }
      </Text>);
  }
}
