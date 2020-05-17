import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import { globalStyles } from "../styles/global.js";
import TrialItem from '../shared/trialItem.js';
import { Progress } from "../data/progress.js";

import content from '../data/content.json';

export default function Trials() {

  const [progress, setProgress] = useContext(Progress);

  const toggleState = function(id) {
    setProgress((prevState) => {
      prevState[id] = true;
      return JSON.parse(JSON.stringify(prevState));
    });
  }

  var container = [];
  for (var i = 1; i < 11; i++) {
    container.push(
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionText}>
          {content.acts[i].title}
        </Text>
      </View>
    );

    container.push(
      <FlatList
        data={content.acts[i].tasks.filter(
          task => "rewards" in task && "trial" in task.rewards)}
        renderItem={({ item, index }) => (
          <TrialItem item={ item }
                     progress={ progress }
                     pressHandler={ toggleState }/>
        )}
      />
    );
  }

  // Trials are special. They exist in maps too
  container.push(
    <View style={globalStyles.section}>
      <Text style={globalStyles.sectionText}>
        {content.acts["maps"].title}
      </Text>
    </View>
  );

  container.push(
    <FlatList
      data={content.acts["maps"].tasks.filter(
        task => "rewards" in task && "trial" in task.rewards)}
      renderItem={({ item, index }) => (
        <TrialItem item={ item }
                   progress={ progress }
                   pressHandler={ toggleState }/>
      )}
    />
  );

  return (
    <View style={globalStyles.header}>
      <View>
        {container}
      </View>
    </View>
  );
}
