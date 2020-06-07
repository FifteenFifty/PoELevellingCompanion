import React, {useContext} from 'react';
import { Text, SafeAreaView, View, SectionList} from 'react-native';

import { globalStyles } from "../styles/global.js";
import TrialItem from '../shared/trialItem.js';
import { ProgressContext } from "../data/progress.js";

import content from '../data/content.json';

export default function Trials() {
  const [progress, dispatch] = useContext(ProgressContext);

  const renderItemFunc = ({ item, section }) => (
    "rewards" in item && "trial" in item.rewards
    ? <TrialItem act={section.num}
                 item={ item }
                 pressHandler={ dispatch }
                 complete={progress.completed.includes(item.id)} />
    : <Text></Text>
  );

  // Not every act has a trial, and it's ugly to include acts which don't
  var trials = content.acts.map( (act) => {
    var o = Object.create(act);
    o.data = o.data.filter((item) => {
      return "rewards" in item && "trial" in item.rewards
    })
    return o;
  }).filter((act) => {
    return act.data.length;
  }).concat(content.maps);

  return (
    <SafeAreaView style={globalStyles.section}>
      <SectionList
        sections={trials}
        keyExtractor={(item) => item.id}
        renderItem={renderItemFunc}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={globalStyles.sectionText}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}
