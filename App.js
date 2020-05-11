import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Progress } from './data/progress.js';
import { globalStyles } from "./styles/global.js";
import DrawerNavigator from "./routes/drawer.js";

export default function App() {
  const [progress, setProgress] = useState({"currentAct": 1});

  return(
    <Progress.Provider value={[progress, setProgress]}>
      <DrawerNavigator />
    </Progress.Provider>
  );
}
