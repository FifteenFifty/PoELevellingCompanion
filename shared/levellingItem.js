import React, {useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Progress } from "../data/progress.js";
import FormattedText from "../shared/formattedText.js";

export default function LevellingItem({item, complete, pressHandler}) {

  const [progress, setProgress] = useContext(Progress);
  console.log("Rendering: " + item.id);

  var objectiveStyle = [];
  var rewardStyle    = [styles.infoItem];
  if ( item.id in progress) {
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
      var o = (<FormattedText taskId={item.id}
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
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
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
