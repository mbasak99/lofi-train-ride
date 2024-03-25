"use client";
import { useState, FunctionComponent, useEffect } from "react";

const InputRange: FunctionComponent<{
  label: string;
  name: string;
  volume: number;
  setVolume: (volume: number) => void;
}> = ({ label, name, volume, setVolume }) => {
  return (
    <span className="flex flex-col gap-4">
      <label htmlFor={name}>{label}: </label>
      <input
        className="accent-amber-500"
        name={name}
        type="range"
        title={label}
        min={0}
        max={100}
        value={volume}
        onChange={(event) => {
          setVolume(Number(event.target.value));
        }}
      />
    </span>
  );
};

export default InputRange;
