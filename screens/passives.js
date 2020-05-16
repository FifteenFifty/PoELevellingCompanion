import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import { globalStyles } from "../styles/global.js";
import PassiveItem from '../shared/passiveItem.js';
import { Progress } from "../data/progress.js";

import content from '../data/content.json';

export default function Passives() {

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
          task => "rewards" in task && "passive" in task.rewards)}
        renderItem={({ item, index }) => (
          <PassiveItem item={ item }
                       progress={ progress }
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
