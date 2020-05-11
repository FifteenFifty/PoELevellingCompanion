import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import { globalStyles } from "../styles/global.js";
import TrialItem from '../shared/trialItem.js';

import content from '../data/content.json';

export default function Trials() {

  const [state, setState] = useState(content);

  const toggleState = function(index, id) {
    setState((prevState) => {
      //TODO - this copying is stupid and needs fixing
      prevState.acts[prevState.currentAct].tasks[index].complete =
        !prevState.acts[prevState.currentAct].tasks[index].complete;
      return JSON.parse(JSON.stringify(prevState));
    });
  }

  var container = [];
  for (var i = 1; i < 11; i++) {
    container.push(<Text>{state.acts[i].title}</Text>);
    container.push(
      <FlatList
        data={state.acts[i].tasks.filter(
          task => "rewards" in task && "trial" in task.rewards)}
        renderItem={({ item, index }) => (
          <TrialItem item={ item }
                       index={ index }
                       pressHandler={ toggleState }/>
        )}
      />
    );
  }

  return (
    <View style={globalStyles.header}>
      <View>
        {container}
      </View>
    </View>
  );
}
