import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

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
        var newStyle = [globalStyles[type]].concat(defaultStyle);
        uniqueKey += idx.toString();
        fragments.push(<Text key={ uniqueKey }
                             style={ newStyle }>{value}</Text>);
      }
    });
  } else {
    fragments.push(<Text key={ uniqueKey }
                         style={ globalStyles["text"] }>{fragment}</Text>);
  }

  return fragments;
}

export default class FormattedText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var taskId = this.props.taskId;
    var style = this.props.style;

    var indexObj = {"i": 0};

    var ret = [];

    if (this.props.children) {
      this.props.children.forEach(function(value, index) {
        ret.push(
          <Text key={"FormattedTextWrapper" + taskId + index}>
            { parseTextFragment(taskId, value, style, indexObj)}
          </Text>
        );
      });
    }

    return ret;
  }
}
