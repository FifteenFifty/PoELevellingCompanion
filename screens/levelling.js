import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import { globalStyles } from "../styles/global.js";
import Item from '../shared/item.js';

import content from '../data/content.json';

export default function Levelling() {

  const [state, setState] = useState(content);

  const toggleState = function(index, id) {
    setState((prevState) => {
      //TODO - this copying is stupid and needs fixing
      prevState.acts[prevState.currentAct].tasks[index].complete =
        !prevState.acts[prevState.currentAct].tasks[index].complete;
      return JSON.parse(JSON.stringify(prevState));
    });
  }

  return (
    <View style={globalStyles.header}>
      <View>
      <FlatList
        data={state.acts[state.currentAct].tasks}
        renderItem={({ item, index }) => (
          <Item item={ item }
                index={ index }
                pressHandler={ toggleState }/>
        )}
      />
      </View>
    </View>
  );
}
