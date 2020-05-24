import React, { createContext } from "react";

export const ProgressContext = createContext(new Map());

export const useProgress = (): ProgressContext => {
  const [progress, setProgress] = React.useState(new Map());

  const setCurrentProgress = React.useCallback(
    id => {
      const newSelected = new Map(progress);
      newSelected.set(id, !progress.get(id));

      console.log(id + " is " + !!progress.get(id))
      console.log("progress is ")
      console.log(progress)

      setProgress(newSelected);
    },
    [progress]
  );

  return {
    progress,
    setCurrentProgress
  }
};
