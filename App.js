import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Progress } from './data/progress.js';
import { globalStyles } from "./styles/global.js";
import DrawerNavigator from "./routes/drawer.js";

export default function App() {
  const [progress, setProgress] = useState(
    {
      "currentAct": 1,
      "acts": {
        1: {
        },
        2: {
        },
        3: {
        },
        4: {
        },
        5: {
        },
        6: {
        },
        7: {
        },
        8: {
        },
        9: {
        },
        10: {
        }
      }
    },
  );

  console.log("Progress:");
  console.log(progress.acts[1]);

  return(
    <Progress.Provider value={[progress, setProgress]}>
      <DrawerNavigator />
    </Progress.Provider>
  );
}
