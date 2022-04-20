import React, { useContext } from "react";
import { StopwatchContext } from "../../../services/stopwatch/stopwatch.context";
import Stopwatch from "../../../components/stop-watch/stopwatch";

export const StopWatchComponent = () => {
  const { startStopwatch, resetStopWatch, getTimeHandler } =
    useContext(StopwatchContext);

  return (
    <Stopwatch
      laps
      secs
      start={startStopwatch}
      reset={resetStopWatch}
      getTime={getTimeHandler}
      options={{
        container: {},
        text: { color: "white", fontSize: 30 },
      }}
    />
  );
};
