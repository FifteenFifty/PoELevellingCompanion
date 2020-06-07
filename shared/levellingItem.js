import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Progress } from "../data/progress.js";
import FormattedText from "../shared/formattedText.js";
import {globalStyles} from "../styles/global.js";

import { LeftLabel, RightLabel } from "../shared/stackedLabel.js";

export default class LevellingItem extends React.PureComponent {

  render() {
    var item         = this.props.item;
    var act          = this.props.act;
    var complete     = this.props.complete;

    var objectiveStyle = [];
    var rewardStyle    = [globalStyles.infoItem];

    if ( !item.optional ) {
      objectiveStyle.push(globalStyles.required)
    }

    var objectiveLine = [];

    var key = item.id;

    objectiveLine.push(
      <FormattedText key={key}
                     taskId={item.id}
                     style={objectiveStyle}>
        {item.text}
      </FormattedText>
    );

    var infoLine = [];
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
      item.directionArrow = direction;
    }
    if (item.rewards) {
      var reward = [<Text>💰</Text>];
      if (item.rewards.passive) {
        reward.push(<Text style={rewardStyle}
                          key={item.id + "PassiveReward"} >+{item.rewards.passive.num}</Text>);
      }
      if (item.rewards.item) {
        reward.push(<Text style={rewardStyle}
                          key={item.id + "ItemReward"}>{item.rewards.item}</Text>);
      }
      infoLine.push(<Text key={item.id + "GenericReward"}
                          style={rewardStyle}>{reward}</Text>);
    }

    var itemStyle = [globalStyles.container]

    if (complete) {
      itemStyle.push(globalStyles.complete)
    }

    var pressHandler = () => {
      this.props.pressHandler(this.props.item.id);
    }

    return (
      <View key={"LevellingContainer" + item.id}>
        <TouchableOpacity key={"Touchable" + item.id}
                          onPress={pressHandler}>
          <View key={"ObjectiveContainer" + item.id}
                style={itemStyle}>
            <LeftLabel key={item.id + "LeftLabel"} item={item}/>
            <View style={globalStyles.centerBlock}>
              { objectiveLine }
              { infoLine }
            </View>
            <RightLabel key={item.id + "RightLabel"} item={item} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
