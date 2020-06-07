import React, {useContext} from 'react';
import { Text, View, Button} from 'react-native';

import { globalStyles, setTheme } from "../styles/global.js";
import { ProgressContext } from "../data/progress.js";



export default function Settings() {
  const [progress, dispatch] = useContext(ProgressContext);

  const resetProgress = () => {
    dispatch(null)
  }

  const lightTheme = () => {
    setTheme("light")
  }
  const darkTheme = () => {
    setTheme("dark")
  }
  const amoledTheme = () => {
    setTheme("amoled")
  }

  return (
      <View style={globalStyles.genericPage}>
        <Text style={globalStyles.headerText}>Progress</Text>

        <View style={globalStyles.borderlessContainer}>
          <Button title="Reset progress"
                  onPress={resetProgress} />
        </View>

        <Text style={globalStyles.headerText}>Theme</Text>
        <View style={globalStyles.borderlessContainer}>
          <Button title="Light"
                  onPress={lightTheme} />
          <Button title="Dark"
                  onPress={darkTheme} />
          <Button title="AMOLED"
                  onPress={amoledTheme} />
        </View>
      </View>
  );
}
