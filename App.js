// Used for debugging
import "./dev/whyDidYouReRender.js"

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { globalStyles } from "./styles/global.js";
import DrawerNavigator from "./routes/drawer.js";
import { ProgressContextProvider } from "./data/progress.js";

export default function App() {
  return(
    <ProgressContextProvider>
      <DrawerNavigator/>
    </ProgressContextProvider>
  );
}
