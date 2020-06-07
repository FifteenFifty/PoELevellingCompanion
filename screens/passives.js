import React, {useContext} from 'react';
import { Text, SafeAreaView, View, SectionList} from 'react-native';

import { globalStyles } from "../styles/global.js";
import PassiveItem from '../shared/passiveItem.js';
import { ProgressContext } from "../data/progress.js";

import content from '../data/content.json';

export default function Passives() {
  const [progress, dispatch] = useContext(ProgressContext);

  const renderItemFunc = ({ item, section }) => (
    <PassiveItem act={section.num}
                 item={ item }
                 pressHandler={ dispatch }
                 complete={progress.completed.includes(item.id)} />
  );

  // Need to take a copy of the acts array else we end up modifying it and
  // breaking all of the other sections
  var passives = content.acts.map((act) => {
    var o = Object.create(act);
    o.data = o.data.filter((item) => {
      return "rewards" in item && "passive" in item.rewards
    });
    return o;
  });

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
