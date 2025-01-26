"use client";

import { intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";

enum TimeTypes {
  Days = "Days",
  Hours = "Hours",
  Minutes = "Minutes",
  Seconds = "Seconds",
}

const Box = ({ type, num }: { type: string; num?: number }) => {
  return (
    <div className="flex justify-center flex-col items-center w-1/4 md:w-full text-white">
      <span className="font-extrabold text-5xl md:text-8xl">
        {num ? num : "0"}
      </span>
      <p
        style={{ fontFamily: '"geom-graphic", sans-serif' }}
        className="text-lg md:text-4xl"
      >
        {type}
      </p>
    </div>
  );
};

export const CountdownTimer = () => {
  const dateFuture = new Date("2025-02-04T15:00:00Z").getTime();
  const [currTime, setCurrTime] = useState(
    intervalToDuration({
      start: new Date(),
      end: new Date(dateFuture),
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const dateNow = new Date().getTime();

      const newDuration = intervalToDuration({
        start: new Date(dateNow),
        end: new Date(dateFuture),
      });

      setCurrTime((prev) => {
        if (
          prev.days !== newDuration.days ||
          prev.hours !== newDuration.hours ||
          prev.minutes !== newDuration.minutes ||
          prev.seconds !== newDuration.seconds
        ) {
          return newDuration;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [dateFuture]);

  return (
    <div
      style={{ fontFamily: "bitcount-mono-single-circle" }}
      className="flex w-full md:w-auto justify-center space-x-4 md:space-x-12 mt-8"
    >
      <Box type={TimeTypes.Days} num={currTime.days} />
      <Box type={TimeTypes.Hours} num={currTime.hours} />
      <Box type={TimeTypes.Minutes} num={currTime.minutes} />
      <Box type={TimeTypes.Seconds} num={currTime.seconds} />
    </div>
  );
};
