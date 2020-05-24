import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, View, SectionList} from 'react-native';

import { globalStyles } from "../styles/global.js";
import LevellingItem from '../shared/levellingItem.js';

import { Progress } from "../data/progress.js";

import content from '../data/content.json';

export default function Levelling() {

  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      console.log("Selected called (" + id + ")");
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      console.log("The map looks like:")
      console.log(newSelected)

      setSelected(newSelected);
    },
    [selected],
  );

  const renderItemFunc = function({item, section}) {
    if (item.id === "EnemyAtTheGate") {
      console.log("render: " + item.id);
      console.log(("Complete: " + !!selected.get(item.id)))
    }
    return <LevellingItem act={section.num}
                          item={ item }
                          pressHandler={ onSelect }
                          complete={!!selected.get(item.id)} />
  };

  return (
    <SafeAreaView style={globalStyles.section}>
      <SectionList
        sections={content.acts}
        keyExtractor={(item) => item.id}
        renderItem={renderItemFunc}
        extraData={selected}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={globalStyles.sectionText}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}
