"use client";
import moment from "moment";
import { useEffect, useState } from "react";

const CountDown = () => {
  const endTime = moment().add(1, "hour");

  const [remainingTime, setRemainingTime] = useState<number>(
    calculateRemainingTime()
  );

  function calculateRemainingTime(): number {
    return Math.max(
      0,
      Math.floor((endTime.valueOf() - moment().valueOf()) / 1000)
    );
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const minutes: number = Math.floor(remainingTime / 60);
  const seconds: number = remainingTime % 60;

  return (
    <div className="flex items-center gap-2 mt-20 my-10 px-5">
      <p className="text-xl">Time remaining </p>
      <div className="grid grid-flow-col gap-5 text-center">
        <div className="flex gap-1 justify-center items-center bg-blue-400 text-neutral-content p-2">
          <span className="countdown font-mono">
            <span style={{ "--value": minutes } as React.CSSProperties}></span>
          </span>
          m
        </div>
        <div className="flex gap-1 justify-center items-center bg-blue-400 text-neutral-content p-2">
          <span className="countdown font-mono">
            <span style={{ "--value": seconds } as React.CSSProperties}></span>
          </span>
          s
        </div>
      </div>
    </div>
  );
};

export default CountDown;
