import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { globalStyles } from "../styles/global.js";
import FormattedText from "../shared/formattedText.js";

export default class PassiveItem extends React.Component {

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
    var passive = item.rewards.passive;

    var objectiveStyle = [globalStyles.required];
    if ( complete ) {
      objectiveStyle.push(globalStyles.complete)
    }

    var objectiveLine = [
      <FormattedText key={item.id + "PassiveQuestText"}
                     style={objectiveStyle}
                     taskId={item.id + "QText"}>
        {["Quest: " + passive.quest]}
      </FormattedText>,
      <FormattedText key={item.id + "PassiveWpText"}
                     style={objectiveStyle}
                     taskId={item.id + "WPText"}>
      {["WP: " + passive.wp]}
      </FormattedText>
    ];

    if (passive.text) {
      objectiveLine.push(
        <FormattedText key={item.id + "PassiveText"}
                       style={objectiveStyle}
                       taskId={item.id + "Text"}>
          {passive.text}
        </FormattedText>);
    }

    return (
      <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <View style={globalStyles.item}>
            { objectiveLine }
        </View>
      </TouchableOpacity>
    )
  }
}
