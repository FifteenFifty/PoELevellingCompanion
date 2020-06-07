import React, { useState, useEffect, createContext } from "react";
import { AsyncStorage } from "react-native";

export const ProgressContext = createContext();

const initialState = JSON.parse(localStorage.getItem("PoELCProgress")) || {
  completed: []
}

const reducer = (state, id) => {
  var newState
  if (!id) {
    // We've been given no ID (probably from a progress reset)
    // TODO This is a hack
    newState = {
      completed: []
    }
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

export const ProgressContextProvider = (props) => {
  const [progress, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ProgressContext.Provider value={[progress, dispatch]}>
      {props.children}
    </ProgressContext.Provider>
  );
}
