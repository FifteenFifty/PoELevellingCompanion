import React, { useState, createContext } from "react";

export const ProgressContext = createContext();

const initialState = {
  completed: []
}

const reducer = (state, id) => {
  console.log("My redicer");
  console.log(state)
  if (!state.completed.includes(id)) {
    return {
      completed: [...state.completed, id]
    }
  } else {
    return {
      completed: state.completed.filter(
        (checkId) => checkId != id
      )
    }
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
