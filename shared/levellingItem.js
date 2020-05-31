import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Progress } from "../data/progress.js";
import FormattedText from "../shared/formattedText.js";
import {globalStyles} from "../styles/global.js";

import { LeftLabel, RightLabel } from "../shared/stackedLabel.js";

export default class LevellingItem extends React.PureComponent {

  render() {
    if (this.props.item.id == "EnemyAtTheGate") {
      console.log("Rendering hillock")
    }
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

    var itemStyle = [this.styles.container]

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
            <View style={this.styles.centerBlock}>
              { objectiveLine }
              { infoLine }
            </View>
            <RightLabel key={item.id + "RightLabel"} item={item} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        minHeight: 50,
        paddingTop: 2,
        paddingBottom: 2,
        borderBottomWidth: 2,
        borderColor: "#4d4d4d"
    },
    label: {
        display: "flex",
        alignItems: "center",
        width: 30,
        justifyContent: "center",
    },
    labelTextLeft: {
        fontSize: 20,
        marginRight: 6,
        width: 100,
        textAlign: "center",
        color: "white",
        transform: [
            {rotate: "-90deg"}
        ]
    },
    labelTextRight: {
        fontSize: 20,
        marginLeft: 6,
        width: 100,
        textAlign: "center",
        color: "white",
        transform: [
            {rotate: "90deg"}
        ]
    },
    waypointLabelActive: {
        backgroundColor: "#84a9e1"
    },
    waypointLabelInactive: {},
    centerBlock: {
      flex: 1,
      width: "80%"
    },
    requiredLabel:{
        backgroundColor: "#aade87"
    },

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
    opacity: .2
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
}
