import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, View, SectionList} from 'react-native';

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
//      const newState = Object.assign({}, prevState.acts[act]);
//      if (id in newState) {
//console.log("Deleting");
//        delete newState[id];
//      } else {
//console.log("Adding");
//        newState[id] = true;
//      }
//      prevState.acts[act] = newState
      return prevState;
    });
  }
  console.log("Progress:");
  console.log(progress.acts);

  const renderItemFunc = ({ item, section }) => (
    <LevellingItem act={section.num}
                   item={ item }
                   pressHandler={ toggleState }
                   complete={!!(item.id in progress)} />
    );

  return (
    <SafeAreaView style={globalStyles.section}>
      <SectionList
        sections={content.acts}
        keyExtractor={(item) => item.id}
        renderItem={renderItemFunc}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={globalStyles.sectionText}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}
