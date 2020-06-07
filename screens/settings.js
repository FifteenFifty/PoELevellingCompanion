import React, {useContext} from 'react';
import { Text, View, Button} from 'react-native';

import { globalStyles } from "../styles/global.js";
import { ProgressContext } from "../data/progress.js";



export default function Settings() {
  const [progress, dispatch] = useContext(ProgressContext);

  const resetProgress = () => {
    dispatch(null)
  }

  return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.headerText}>Progress</Text>
        <Button title="Reset progress"
                onPress={resetProgress} />
        <Text style={globalStyles.headerText}>Theme</Text>
      </View>
  );
}
