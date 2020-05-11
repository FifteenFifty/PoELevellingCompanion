import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import { globalStyles } from "../styles/global.js";
import LevellingItem from '../shared/levellingItem.js';

import { Progress } from "../data/progress.js";

import content from '../data/content.json';

export default function Levelling() {

  const [progress, setProgress] = useContext(Progress);

  const toggleState = function(id) {
    setProgress((prevState) => {
      prevState[id] = true;
      return JSON.parse(JSON.stringify(prevState));
    });
  }

  return (
    <View style={globalStyles.header}>
      <View>
      <FlatList
        data={content.acts[progress.currentAct].tasks}
        renderItem={({ item }) => (
          <LevellingItem item={ item }
                         pressHandler={ toggleState }/>
        )}
      />
      </View>
    </View>
  );
}
