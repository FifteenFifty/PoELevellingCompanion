import React, {useContext} from 'react';
import { StyleSheet, Text, SafeAreaView, View, SectionList} from 'react-native';

import { globalStyles } from "../styles/global.js";
import LevellingItem from '../shared/levellingItem.js';

import { ProgressContext } from "../data/progress.js";

import content from '../data/content.json';

export default function Levelling({route}) {
  const [progress, dispatch] = useContext(ProgressContext);

  const renderItemFunc = function({item, section}) {
    return <LevellingItem act={section.num}
                          item={ item }
                          pressHandler={ dispatch }
                          complete={progress.completed.includes(item.id)} />
  };

  return (
    <SafeAreaView style={globalStyles.section}>
      <SectionList
        sections={content.acts}
        keyExtractor={(item) => item.id}
        renderItem={renderItemFunc}
        extraData={progress.progress}
        renderSectionHeader={(section) => (
          <Text style={globalStyles.sectionText}>{section.title}</Text>
        )}
      />
    </SafeAreaView>
  );
}
