import React, { createContext, useState } from "react";
import moment from "moment";

export const StopwatchContext = createContext();

export const StopwatchProvider = ({ children }) => {
  const [startStopwatch, setStartStopwatch] = useState(false);
  const [resetStopWatch, setResetStopwatch] = useState(false);
  const [endTime, setEndTime] = useState(false);
  const [timeSpentInPercentage, setTimeSpentInPercentage] = useState(0);

  const start = () => {
    endTimeHandler();
    setStartStopwatch(true);
  };

  const endTimeHandler = () => {
    let endTime = new Date();
    endTime.setHours(endTime.getHours() + 12);
    console.log(endTime, "end time");
    setEndTime(endTime);
  };

  const stop = () => {
    setStartStopwatch(false);
  };

  const reset = () => {
    setResetStopwatch(true);
  };

  const getTimeHandler = (time) => {
    const currentTimeSpent = moment.duration(time).asMilliseconds();
    const totalTimeToSpend = moment.duration(endTime).asMilliseconds();
    setTimeSpentInPercentage((currentTimeSpent / totalTimeToSpend) * 100);
  };

  return (
    <StopwatchContext.Provider
      value={{
        startStopwatch,
        resetStopWatch,
        timeSpentInPercentage,
        endTime,
        start,
        stop,
        reset,
        getTimeHandler,
      }}
    >
      {children}
    </StopwatchContext.Provider>
  );
};
