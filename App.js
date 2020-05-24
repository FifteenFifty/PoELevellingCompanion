import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { globalStyles } from "./styles/global.js";
import DrawerNavigator from "./routes/drawer.js";
import { ProgressContext, useProgress } from "./data/progress.js";

export default function App() {
  const progress = useProgress();

  return(
    <ProgressContext.Provider value={progress}>
      <DrawerNavigator/>
    </ProgressContext.Provider>
  );
}
