"use client";

import React, { useState, useEffect, useRef } from "react";
import "@/app/globals.css";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    let formatted_hours = String(hours).padStart(2, "0");
    let formatted_minutes = String(minutes).padStart(2, "0");
    let formatted_seconds = String(seconds).padStart(2, "0");
    let formatted_milliseconds = String(milliseconds).padStart(2, "0");

    return `${formatted_minutes}:${formatted_seconds}:${formatted_milliseconds}`;
  }

  return (
    <div className="stopwatch">
      <div className="stopwatch-time">{formatTime()}</div>
      <div className="controls">
        <button onClick={start} className="start">
          Start
        </button>
        <button onClick={stop} className="stop">
          Stop
        </button>
        <button onClick={reset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
