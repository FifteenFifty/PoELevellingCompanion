import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { globalStyles } from "../styles/global.js";
import FormattedText from "../shared/formattedText.js";

export default class TrialItem extends React.Component {

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
    var trial        = item.rewards.trial;

    var objectiveStyle = [globalStyles.required];
    if ( complete ) {
      objectiveStyle.push(globalStyles.complete)
    }

    var objectiveLine = [
      <FormattedText key={item.id + "objText"}
                     style={objectiveStyle}
                     taskId={item.id + "Obj"}>
        {["Trial: " + trial.name]}
      </FormattedText>,
    ];

    if (trial.wp) {
      objectiveLine.push(
        <FormattedText key={item.id + "wpText"}
                       style={objectiveStyle}
                       taskId={item.id + "WP"}>
          {["WP: " + trial.wp]}
        </FormattedText>
      );
    }

    if (trial.text) {
      objectiveLine.push(
        <FormattedText key={item.id + "trialText"}
                       style={objectiveStyle}
                       taskId={item.id + "Text"}>
          {trial.text}
        </FormattedText>);
    }

    return (
      <View key={"TrialContainer" + item.id}>
        <TouchableOpacity key={"TouchableTrial" + item.id}
                          onPress={() => pressHandler(item.id)}>
          <View key={"TrialContainer" + item.id }
                style={globalStyles.stackedContainer}>
              { objectiveLine }
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
