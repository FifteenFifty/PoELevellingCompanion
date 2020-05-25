import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Progress } from "../data/progress.js";
import FormattedText from "../shared/formattedText.js";
import {globalStyles} from "../styles/global.js";

import { WaypointLabel, RequiredLabel, OptionalLabel } from "../shared/verticalLabel.js";

export default class LevellingItem extends React.Component {

  /**
   * Only update a component if its completed state has changed.
   */
  shouldComponentUpdate(nextProps) {
    return nextProps.complete != this.props.complete;
  }

  render() {
    var item         = this.props.item;
    var act          = this.props.act;
    var complete     = this.props.complete;
    var pressHandler = this.props.pressHandler;

    var objectiveStyle = [];
    var rewardStyle    = [globalStyles.infoItem];

    if (complete) {
      objectiveStyle.push(globalStyles.complete)
      rewardStyle.push(globalStyles.complete);
    }

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
                style={this.styles.container}>
            <WaypointLabel active={item.hasWp} />
            <View style={this.styles.centerBlock}>
              { objectiveLine }
            </View>
            { item.optional
              ? <OptionalLabel secondaryText={"?"} />
              : <RequiredLabel />
            }
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
        flexGrow: 1
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
}
