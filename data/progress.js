import React, { useState, useEffect, createContext } from "react";
import { AsyncStorage } from "react-native";

export const ProgressContext = createContext();

const initialState = {
  completed: []
}

const reducer = (state, id) => {
  var newState
  if (typeof id == "object") {
    // We've been given an entirely new state (probably from an initial load)
    // TODO This is a hack
    return id
  } else if (!state.completed.includes(id)) {
    newState = {
      completed: [...state.completed, id]
    }
  } else {
    newState = {
      completed: state.completed.filter(
        (checkId) => checkId != id
      )
    }
  }
  storeData(newState)
  return newState
}

const storeData = async (progress) => {
  try {
    await AsyncStorage.setItem("PoELCProgress",
                               JSON.stringify(progress));
  } catch (error) {
    //TODO - error saving data
    console.error("Saving error");
    console.error(error);
  }
}

const loadData = async () => {
  try {
    const value = await AsyncStorage.getItem("PoELCProgress");
    return value ? JSON.parse(value) : value
  } catch (error) {
    //TODO - error saving data
    console.error("Loading error");
    console.error(error);
  }
}

export const ProgressContextProvider = (props) => {
  const [progress, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    loadData().then((loadedProgress) => {
console.log("Loaded: " )
console.log(loadedProgress)
      if (loadedProgress) {
        dispatch(loadedProgress)
      }
    })},
    [] /* Empty array = only run on mount */
  );

  return (
    <ProgressContext.Provider value={[progress, dispatch]}>
      {props.children}
    </ProgressContext.Provider>
  );
}
