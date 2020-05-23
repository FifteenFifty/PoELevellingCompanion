import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import { globalStyles } from "../styles/global.js";
import LevellingItem from '../shared/levellingItem.js';

import { Progress } from "../data/progress.js";

import content from '../data/content.json';

export default function Levelling() {

  const [progress, setProgress] = useState(
  {
    "acts": {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
      10: {}
    }
  }
);

  const toggleState = function(act, id) {
    setProgress((prevState) => {
      const newState = Object.assign({}, prevState.acts[act]);
      if (id in newState) {
console.log("Deleting");
        delete newState[id];
      } else {
console.log("Adding");
        newState[id] = true;
      }
      prevState.acts[act] = newState
      return prevState;
    });
  }
  console.log("Progress:");
  console.log(progress.acts);

  var container = [];
  for (var i = 1; i < 2; i++) {

    container.push(
      <View key={"act" + i}
            style={globalStyles.section}>
        <Text style={globalStyles.sectionText}>
          {content.acts[i].title}
        </Text>
      </View>
    );

    const renderItemFunc = ({ item }) => (
      <LevellingItem act={i}
                     item={ item }
                     pressHandler={ toggleState }
                     complete={!!(item.id in progress)} />
      );

    container.push(
      <FlatList
        key={"levellingTasksAct" + i}
        data={content.acts[i].tasks}
        extraData={progress.acts[i]}
        keyExtractor={(item) => item.id}
        renderItem={renderItemFunc}
      />
    );
  }

  return (
    <View>
      {container}
    </View>
  );
}
