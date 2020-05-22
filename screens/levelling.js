import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import { globalStyles } from "../styles/global.js";
import LevellingItem from '../shared/levellingItem.js';

import { Progress } from "../data/progress.js";

import content from '../data/content.json';

export default function Levelling() {

  const [progress, setProgress] = useState(Progress);

  const toggleState = function(id) {
    setProgress((prevState) => {
      const newState = Object.assign({}, prevState);
      if (id in newState) {
console.log("Deleting");
        delete newState[id];
      } else {
console.log("Adding");
        newState[id] = true;
      }
      return newState;
    });
  }

  var container = [];
  for (var i = 1; i < 11; i++) {
    container.push(
      <View key={"act" + i}
            style={globalStyles.section}>
        <Text style={globalStyles.sectionText}>
          {content.acts[i].title}
        </Text>
      </View>
    );

    container.push(
      <FlatList
        key={"levellingTasksAct" + i}
        data={content.acts[i].tasks}
        extraData={progress}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LevellingItem item={ item }
                         pressHandler={ toggleState }
                         complete={!!(item.id in progress)}/>
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
