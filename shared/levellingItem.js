import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Progress } from "../data/progress.js";
import FormattedText from "../shared/formattedText.js";
import {globalStyles} from "../styles/global.js";

export default function LevellingItem({item, complete, pressHandler}) {

  const [progress, setProgress] = useState(Progress);

  var objectiveStyle = [];
  var rewardStyle    = [globalStyles.infoItem];
  if ( item.id in progress) {
    objectiveStyle.push(globalStyles.complete)
    rewardStyle.push(globalStyles.complete);
  }
  if ( !item.optional ) {
    objectiveStyle.push(globalStyles.required)
  }

  var objectiveLine = [];

  var key = item.id;

  if (Array.isArray(item.text)) {
    item.text.forEach(function (value, index) {
      key += index.toString();
      var o = (<FormattedText key={key}
                              taskId={item.id}
                              style={objectiveStyle}>
                 {value}
               </FormattedText>);
      objectiveLine.push(o);
    });
  } else {
    var wp = "";

    if (item.hasWp) {
      wp = " /[WP]/";
    }

    var o = (<FormattedText taskId={item.id}
                            style={objectiveStyle}>
               {item.text + wp}
             </FormattedText>);

    objectiveLine.push(<View key={key} style={globalStyles.objective}>{ o }</View>);
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
                        key={item.id + "PassiveReward"} >+{item.rewards.passive.num}</Text>);
    }
    if (item.rewards.item) {
      reward.push(<Text style={rewardStyle}
                        key={item.id + "ItemReward"}>{item.rewards.item}</Text>);
    }
    infoLine.push(<Text key={item.id + "GenericReward"}
                        style={rewardStyle}>Reward: {reward}</Text>);
  }

  return (
    <View key={"LevellingContainer" + item.id}>
      <TouchableOpacity key={"Touchable" + item.id}
                        onPress={() => pressHandler(item.id)}>
        <View key={"ObjectiveContainer" + item.id}
              style={globalStyles.item}>
          { objectiveLine }
          <View key={"RewardContainer" + item.id}
                style={globalStyles.info}>
            { infoLine }
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
