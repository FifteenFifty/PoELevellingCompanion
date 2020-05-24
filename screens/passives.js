import React, {useContext} from 'react';
import { StyleSheet, Text, SafeAreaView, View, SectionList} from 'react-native';

import { globalStyles } from "../styles/global.js";
import PassiveItem from '../shared/passiveItem.js';
import { Progress } from "../data/progress.js";

import content from '../data/content.json';

export default function Passives() {

  const [progress, setProgress] = useContext(Progress);

  const toggleState = function(id) {
    setProgress((prevState) => {
      return prevState;
    });
  }

  const renderItemFunc = ({ item, section }) => (
    "rewards" in item && "passive" in item.rewards
    ? <PassiveItem act={section.num}
                   item={ item }
                   pressHandler={ toggleState }
                   complete={item.id in progress} />
    : ""
  );

  // Need to take a copy of the acts array else we end up modifying it and
  // breaking all of the other sections
  // TODO - do this properly
  var passives = JSON.parse(JSON.stringify(content.acts));

  passives.forEach((passive) => {
    passive.data = passive.data.filter((item) => {
      return "rewards" in item && "passive" in item.rewards
    })
  })

  console.log(content)

  return (
    <SafeAreaView style={globalStyles.section}>
      <SectionList
        sections={passives}
        keyExtractor={(item) => item.id}
        renderItem={renderItemFunc}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={globalStyles.sectionText}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}
