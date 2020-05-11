import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
        var newStyle = defaultStyle.concat([styles[type]]);
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

export default function LevellingItem({item, index, pressHandler}) {
  var objectiveStyle = [];
  var rewardStyle    = [styles.infoItem];
  if ( item.complete ) {
    objectiveStyle.push(styles.complete)
    rewardStyle.push(styles.complete);
  }
  if ( !item.optional ) {
    objectiveStyle.push(styles.required)
  }

  var objectiveLine = [];

  var key = item.id;

  if (Array.isArray(item.text)) {
    item.text.forEach(function (value, index) {
      key += index.toString();
      var o = parseObjectiveFragment(item.id, value, objectiveStyle, index);
      objectiveLine.push(<View key={key} style={styles.objective}>{ o }</View>);
    });
  } else {
    var o = parseObjectiveFragment(item.id, item.text, objectiveStyle, 0);
    if (item.hasWp) {
      o.push(<Text key="{key}WP" style={styles.waypoint}> [WP]</Text>);
    }

    objectiveLine.push(<View key={key} style={styles.objective}>{ o }</View>);
  }

  var infoLine = [];
  if (item.minLvl) {
    infoLine.push(<Text key="{key}MinLvl"
                        style={rewardStyle}>Min lvl: {item.minLvl}</Text>);
  }
  if (item.direction) {
    var direction = "?";

    switch (item.direction) {
      case "N":
        direction = "↑";
        break;

      case "NE":
        direction = "↗";
        break;

      case "E":
        direction = "→";
        break;

      case "SE":
        direction = "↘";
        break;

      case "S":
        direction = "↓";
        break;

      case "SW":
        direction = "↙";
        break;

      case "W":
        direction = "←";
        break;

      case "NW":
        direction = "↖";
        break;
    }
    infoLine.push(<Text key="{item.id}Direction"
                        style={rewardStyle}>Go {direction}</Text>);
  }
  if (item.rewards) {
    var reward = [];
    if (item.rewards.passive) {
      reward.push(<Text style={rewardStyle}
                        key="{item.id}Passive" >+{item.rewards.passive.num}</Text>);
    }
    if (item.rewards.item) {
      reward.push(<Text style={rewardStyle}
                        key="{item.id}Item">{item.rewards.item}</Text>);
    }
    infoLine.push(<Text key="{item.id}Reward"
                        style={rewardStyle}>Reward: {reward}</Text>);
  }

  return (
    <TouchableOpacity onPress={() => pressHandler(index, item.id)}>
      <View style={styles.item}>
    <View>
        { objectiveLine }
    </View>
        <View style={styles.info}>
          { infoLine }
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding:10,
    marginTop: 10,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
  },
  objective: {
    flexDirection: "row"
  },
  info: {
    flexDirection: "row"
  },
  infoItem: {
    padding: 5
  },
  complete: {
    textDecorationLine: "line-through",
    opacity: .25
  },
  required: {
    fontWeight: "bold"
  },
  boss: {
    //TODO
    color: "red"
  },
  area: {
    //TODO
    color: "blue"
  },
  quest: {
    //TODO
    color: "green"
  },
  waypoint: {
    //TODO
    color: "lightblue"
  },
  trial: {
    //TODO
    color: "teal"
  }
})
